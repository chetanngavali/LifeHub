import React, { useState } from 'react';
import { Plus, Search, Filter, BookOpen, Tag, Calendar, FileText, Image, FileIcon } from 'lucide-react';
import type { Note } from '../types';

export default function StudyNotes() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('all');

  const notes: Note[] = [
    {
      id: '1',
      title: 'Calculus - Derivatives',
      content: 'Key concepts about derivatives and their applications...',
      tags: ['math', 'calculus', 'derivatives'],
      subject: 'Mathematics',
      createdAt: '2025-01-20',
      fileType: 'text'
    },
    {
      id: '2',
      title: 'Physics - Newton\'s Laws',
      content: 'Three fundamental laws of motion...',
      tags: ['physics', 'mechanics', 'laws'],
      subject: 'Physics',
      createdAt: '2025-01-19',
      fileType: 'text'
    },
    {
      id: '3',
      title: 'Chemistry Lab Results',
      content: 'Experimental data from acid-base titration...',
      tags: ['chemistry', 'lab', 'titration'],
      subject: 'Chemistry',
      createdAt: '2025-01-18',
      fileType: 'image'
    },
    {
      id: '4',
      title: 'History - World War II',
      content: 'Timeline and key events of WWII...',
      tags: ['history', 'wwii', 'timeline'],
      subject: 'History',
      createdAt: '2025-01-17',
      fileType: 'text'
    }
  ];

  const subjects = ['all', ...Array.from(new Set(notes.map(note => note.subject)))];

  const filteredNotes = notes.filter(note => {
    const matchesSearch = note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         note.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         note.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesSubject = selectedSubject === 'all' || note.subject === selectedSubject;
    return matchesSearch && matchesSubject;
  });

  const getFileIcon = (fileType: string) => {
    switch (fileType) {
      case 'image': return Image;
      case 'pdf': return FileIcon;
      default: return FileText;
    }
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Study Notes</h1>
          <p className="text-gray-600">Organize and search through all your study materials</p>
        </div>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
          <Plus className="w-5 h-5" />
          <span>Add Note</span>
        </button>
      </div>

      {/* Search and Filter */}
      <div className="flex space-x-4 mb-6">
        <div className="flex-1 relative">
          <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search notes, tags, or content..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <select
          value={selectedSubject}
          onChange={(e) => setSelectedSubject(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          {subjects.map(subject => (
            <option key={subject} value={subject}>
              {subject === 'all' ? 'All Subjects' : subject}
            </option>
          ))}
        </select>
      </div>

      {/* Notes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredNotes.map(note => {
          const FileIcon = getFileIcon(note.fileType);
          return (
            <div key={note.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <FileIcon className="w-5 h-5 text-blue-600" />
                  <h3 className="font-semibold text-gray-900 text-lg truncate">{note.title}</h3>
                </div>
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  {note.subject}
                </span>
              </div>
              
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">{note.content}</p>
              
              <div className="flex flex-wrap gap-1 mb-4">
                {note.tags.map(tag => (
                  <span key={tag} className="bg-blue-50 text-blue-600 px-2 py-1 rounded-full text-xs flex items-center">
                    <Tag className="w-3 h-3 mr-1" />
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-3 h-3" />
                  <span>{new Date(note.createdAt).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <BookOpen className="w-3 h-3" />
                  <span>{note.fileType}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredNotes.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
            <BookOpen className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No notes found</h3>
          <p className="text-gray-500">Try adjusting your search or add some study notes to get started.</p>
        </div>
      )}

      {/* Upload Area */}
      <div className="mt-8 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors">
        <div className="w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
          <Plus className="w-6 h-6 text-blue-600" />
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">Upload or Create Notes</h3>
        <p className="text-gray-500 mb-4">Drag and drop files here, or click to browse</p>
        <div className="flex justify-center space-x-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Upload Files
          </button>
          <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
            Create Note
          </button>
        </div>
      </div>
    </div>
  );
}