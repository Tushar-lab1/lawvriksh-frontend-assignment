import { DollarSign, Folder, Clock, Users } from "lucide-react";

function Cards() {
  const cards = [
    {
      title: "Total revenue",
      value: "$53,00989",
      change: "12% increase from last month",
      icon: <DollarSign size={24} />,
      iconBg: "bg-pink-100",
      iconColor: "text-pink-500",
      iconchange: "📈",
    },
    {
      title: "Projects",
      value: "95 /100",
      change: "10% decrease from last month",
      icon: <Folder size={24} />,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-500",
      iconchange: "📉",
    },
    {
      title: "Time spent",
      value: "1022 /1300 Hrs",
      change: "8% increase from last month",
      icon: <Clock size={24} />,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-500",
      iconchange: "📈",
    },
    {
      title: "Resources",
      value: "101 /120",
      change: "2% increase from last month",
      icon: <Users size={24} />,
      iconBg: "bg-yellow-100",
      iconColor: "text-yellow-500",
      iconchange: "📈",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
      {cards.map((card, index) => (
        <div
          key={index}
          className="p-5 flex flex-col bg-[#f5eae0] rounded-2xl  shadow-sm"
        >
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center ${card.iconBg} ${card.iconColor} mb-3`}
          >
            {card.icon}
          </div>

          <h3 className="text-gray-500 text-sm font-medium">{card.title}</h3>
          <p className="text-2xl font-semibold text-gray-800 mt-1">
            {card.value}
          </p>
          <div className="flex items-end gap-3">
            <p>{card.iconchange}</p>
            <p className="text-sm mt-2">{card.change}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
