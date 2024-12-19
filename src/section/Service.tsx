import React from 'react';
import SectionHeader from '../components/SectionHeader';
import ServiceCard from '../components/ServiceCard';

const Service: React.FC = () => {
  return (
    <div className="w-full h-screen bg-gray-800">
      <section id="service" className="bg-gray-800 p-4 md:p-8 lg:p-16 w-full">
        <SectionHeader title="👨‍💻 My Services" />
        <br />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <ServiceCard logo="/assets/service/flutter.png" />
          <ServiceCard logo="/assets/service/react.png" />
          <ServiceCard logo="/assets/service/vue.png" />
          <ServiceCard logo="/assets/service/js.png" />
          <ServiceCard logo="/assets/service/node.png" />
          <ServiceCard logo="/assets/service/figma.png" />
        </div>
      </section>
    </div>
  );
}

export default Service;
