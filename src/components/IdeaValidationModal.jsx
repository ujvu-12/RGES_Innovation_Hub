import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { X } from 'lucide-react';
import { toast } from 'sonner';

export const IdeaValidationModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    ideaDescription: '',
    stage: 'idea',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store in localStorage for now (mock)
    const existingSubmissions = JSON.parse(localStorage.getItem('ideaValidations') || '[]');
    existingSubmissions.push({ ...formData, submittedAt: new Date().toISOString() });
    localStorage.setItem('ideaValidations', JSON.stringify(existingSubmissions));
    
    toast.success('Thank you! We\'ll contact you soon to discuss your idea.');
    setFormData({ name: '', email: '', phone: '', ideaDescription: '', stage: 'idea' });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-fade-in-up">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Validate Your Idea</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div>
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="John Doe"
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="john@example.com"
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+91 98765 43210"
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="stage">Current Stage *</Label>
            <select
              id="stage"
              required
              value={formData.stage}
              onChange={(e) => setFormData({ ...formData, stage: e.target.value })}
              className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              <option value="idea">Just an Idea</option>
              <option value="research">Market Research Phase</option>
              <option value="prototype">Building Prototype</option>
              <option value="mvp">MVP Ready</option>
            </select>
          </div>

          <div>
            <Label htmlFor="ideaDescription">Tell us about your idea *</Label>
            <Textarea
              id="ideaDescription"
              required
              value={formData.ideaDescription}
              onChange={(e) => setFormData({ ...formData, ideaDescription: e.target.value })}
              placeholder="Describe the problem you're solving and your proposed solution..."
              className="mt-1 min-h-32"
            />
          </div>

          <div className="flex gap-4">
            <Button type="submit" className="flex-1 bg-blue-600 hover:bg-blue-700">
              Submit for Validation
            </Button>
            <Button type="button" variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};