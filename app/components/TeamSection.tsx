import Image from 'next/image'
import { getImagePath } from '../utils/imagePath'

interface TeamMember {
  name: string
  role: string
  image: string
}

const teamMembers: TeamMember[] = [
  {
    name: "Owner",
    role: "Shop Owner",
    image: "/images/team/owners.jpg"
  },
  {
    name: "Team Member",
    role: "Senior Technician",
    image: "/images/team/employee-1.jpg"
  },
  {
    name: "Team Member",
    role: "Transmission Specialist",
    image: "/images/team/employee-2.jpg"
  },
  {
    name: "Team Member",
    role: "Auto Repair Technician",
    image: "/images/team/employee-3.jpg"
  }
]

export function TeamSection() {
  return (
    <section className="section section-padding bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Expert Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our ASE certified technicians bring decades of experience and dedication to every service
          </p>
        </div>

        {/* Team Photos */}
        <div className="mb-16 space-y-12">
          {/* Office Team Photo */}
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <Image
              src={getImagePath("/images/team/team-office.jpg")}
              alt="Rohnert Park Transmission team in office"
              width={1200}
              height={600}
              className="w-full h-auto"
            />
          </div>

          {/* Shop Team Photo */}
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <Image
              src={getImagePath("/images/team/team-shop.jpg")}
              alt="Rohnert Park Transmission team outside shop"
              width={1200}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Individual Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-4 overflow-hidden rounded-lg shadow-md">
                <Image
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  width={300}
                  height={400}
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                {member.name}
              </h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}