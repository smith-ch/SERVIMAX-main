import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  name: string;
  icon: LucideIcon;
  description: string;
  image: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ name, icon: Icon, description, image }) => (
  <div className="bg-white overflow-hidden shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
    <img src={image} alt={name} className="w-full h-48 object-cover" />
    <div className="p-6">
      <Icon className="h-8 w-8 text-blue-400 mb-4" />
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{name}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

export default ServiceCard;