import React from 'react';
import { BookOpen, ExternalLink, Users, Calendar, Award, FileText } from 'lucide-react';

const Research: React.FC = () => {
  const publications = [
    {
      title: 'Advanced Neural Architecture Search for Edge Computing',
      authors: ['Your Name', 'Dr. Jane Smith', 'Prof. John Doe'],
      venue: 'International Conference on Machine Learning (ICML) 2023',
      year: '2023',
      type: 'Conference Paper',
      status: 'Published',
      abstract: 'This paper presents a novel approach to neural architecture search specifically optimized for edge computing environments. We introduce a new pruning algorithm that reduces model size by 60% while maintaining 95% accuracy on standard benchmarks.',
      links: {
        paper: 'https://arxiv.org/paper123',
        code: 'https://github.com/research',
        slides: 'https://slides.com/presentation'
      },
      tags: ['Neural Networks', 'Edge Computing', 'Architecture Search'],
      impact: 'Cited by 45+ papers',
    },
    {
      title: 'Quantum-Inspired Optimization Algorithms for Large-Scale Systems',
      authors: ['Your Name', 'Dr. Alice Johnson'],
      venue: 'Nature Quantum Information',
      year: '2023',
      type: 'Journal Article',
      status: 'Under Review',
      abstract: 'We explore quantum-inspired classical algorithms for solving optimization problems in distributed systems. Our approach demonstrates significant improvements in convergence speed and solution quality compared to traditional methods.',
      links: {
        preprint: 'https://arxiv.org/preprint456',
        code: 'https://github.com/quantum-opt'
      },
      tags: ['Quantum Computing', 'Optimization', 'Distributed Systems'],
      impact: 'Featured in Quantum Computing Weekly',
    },
    {
      title: 'Federated Learning with Differential Privacy in Healthcare',
      authors: ['Your Name', 'Dr. Robert Chen', 'Dr. Sarah Williams'],
      venue: 'IEEE Transactions on Medical Imaging',
      year: '2022',
      type: 'Journal Article',
      status: 'Published',
      abstract: 'This work addresses privacy concerns in federated learning for medical imaging applications. We propose a novel differential privacy mechanism that maintains model utility while ensuring patient data protection.',
      links: {
        paper: 'https://ieee.org/paper789',
        code: 'https://github.com/federated-health',
        dataset: 'https://data.example.com/medical'
      },
      tags: ['Federated Learning', 'Privacy', 'Healthcare AI'],
      impact: 'Downloaded 1000+ times',
    },
  ];

  const theories = [
    {
      title: 'Unified Theory of Adaptive Learning Systems',
      description: 'A comprehensive framework that bridges reinforcement learning, online learning, and adaptive control theory. This theory provides mathematical foundations for systems that can continuously adapt to changing environments.',
      status: 'In Development',
      applications: ['Autonomous Systems', 'Real-time Decision Making', 'Adaptive Interfaces'],
      blogPost: 'https://medium.com/@yourname/unified-theory',
    },
    {
      title: 'Information-Theoretic Approach to Neural Compression',
      description: 'Novel theoretical framework for understanding and optimizing neural network compression using information theory principles. Provides bounds on compression ratios while maintaining performance guarantees.',
      status: 'Published',
      applications: ['Model Compression', 'Edge AI', 'Mobile Computing'],
      blogPost: 'https://medium.com/@yourname/neural-compression',
    },
  ];

  return (
    <section id="research" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Research & Publications
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Exploring the frontiers of computer science through rigorous research, 
            innovative theories, and impactful publications that advance our understanding of technology.
          </p>
        </div>

        {/* Publications Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center space-x-2">
            <FileText size={24} className="text-blue-600 dark:text-blue-400" />
            <span>Publications</span>
          </h3>
          
          <div className="space-y-8">
            {publications.map((pub, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1"
              >
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                        pub.status === 'Published' 
                          ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                          : 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300'
                      }`}>
                        {pub.status}
                      </span>
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-full">
                        {pub.type}
                      </span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {pub.title}
                    </h4>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <div className="flex items-center space-x-1">
                        <Users size={16} />
                        <span>{pub.authors.join(', ')}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar size={16} />
                        <span>{pub.year}</span>
                      </div>
                    </div>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">
                      {pub.venue}
                    </p>
                  </div>
                  {pub.impact && (
                    <div className="flex items-center space-x-2 text-sm bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded-lg">
                      <Award size={16} className="text-yellow-500" />
                      <span className="text-gray-700 dark:text-gray-300">{pub.impact}</span>
                    </div>
                  )}
                </div>

                {/* Abstract */}
                <div className="mb-6">
                  <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Abstract</h5>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {pub.abstract}
                  </p>
                </div>

                {/* Tags */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {pub.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-4">
                  {Object.entries(pub.links).map(([type, url]) => (
                    <a
                      key={type}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
                    >
                      <ExternalLink size={16} />
                      <span className="font-medium capitalize">{type}</span>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Theories Section */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center space-x-2">
            <BookOpen size={24} className="text-indigo-600 dark:text-indigo-400" />
            <span>Independent Research & Theories</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {theories.map((theory, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                    {theory.title}
                  </h4>
                  <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                    theory.status === 'Published' 
                      ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                      : 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                  }`}>
                    {theory.status}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  {theory.description}
                </p>

                {/* Applications */}
                <div className="mb-6">
                  <h5 className="font-semibold text-gray-900 dark:text-white mb-3">Applications</h5>
                  <div className="flex flex-wrap gap-2">
                    {theory.applications.map((app, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm rounded-full"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Blog Link */}
                <a
                  href={theory.blogPost}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
                >
                  <ExternalLink size={16} />
                  <span className="font-medium">Read More</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;