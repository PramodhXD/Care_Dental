type DoctorCardProps = {
  name: string;
  qualification: string;
  specialization: string;
  image?: string;
};

export default function DoctorCard({
  name,
  qualification,
  specialization,
  image,
}: DoctorCardProps) {
  return (
    <div className="bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition p-6 text-center">

      {/* Doctor Image */}
      <div className="flex justify-center mb-4">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-28 h-28 rounded-full object-cover border"
          />
        ) : (
          <div className="w-28 h-28 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 text-3xl font-semibold">
            {name.charAt(0)}
          </div>
        )}
      </div>

      {/* Doctor Info */}
      <h3 className="text-lg font-semibold text-gray-800">
        {name}
      </h3>

      <p className="text-sm text-gray-600 mt-1">
        {qualification}
      </p>

      <p className="text-sm text-blue-600 mt-2 font-medium">
        {specialization}
      </p>
    </div>
  );
}
