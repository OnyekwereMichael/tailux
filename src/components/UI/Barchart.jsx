// 'use client';

// import {
//   BarChart,
//   Bar,
//   XAxis,
//   Tooltip,
//   ResponsiveContainer
// } from 'recharts';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/UI/Card';
// import Image from 'next/image';
// import dots from '@/assets/dots.svg';
// import RadioGroup from './Radiogroup';

// const data = [
//   { name: '06:00', Sales: 5200, Revenue: 4100 },
//   { name: '07:00', Sales: 4800, Revenue: 3900 },
//   { name: '08:00', Sales: 6100, Revenue: 4500 },
//   { name: '09:00', Sales: 7000, Revenue: 5200 },
//   { name: '10:00', Sales: 6400, Revenue: 5000 },
//   { name: '11:00', Sales: 6800, Revenue: 5300 },
//   { name: 'Jul', Sales: 7200, Revenue: 5500 },
//   { name: 'Aug', Sales: 6900, Revenue: 5400 },
//   { name: 'Sep', Sales: 6300, Revenue: 4900 },
//   { name: 'Oct', Sales: 7500, Revenue: 5800 },
//   { name: 'Nov', Sales: 7700, Revenue: 6000 },
//   { name: 'Dec', Sales: 8100, Revenue: 6200 },
// ];

// export default function BarChartMultiple() {
//   return (
//     <Card className="bg-transparent shadow-none border border-gray-800">
//       <CardHeader>
//         <CardTitle className="text-white flex w-full items-center justify-between gap-2">
//           <div className="flex gap-2 items-center">
//             <p className="text-lg font-semibold">Sales & Revenue Overview</p>
//             <span>
//               <Image src={dots} alt="Options menu" />
//             </span>
//           </div>
//           <div>
//             <RadioGroup />
//           </div>
//         </CardTitle>
//       </CardHeader>
//       <CardContent className="h-[300px]">
//         <ResponsiveContainer width="100%" height="100%">
//           <BarChart data={data} barCategoryGap={10}>
//             <XAxis
//               dataKey="name"
//               stroke="#cccccc"
//               axisLine={false}
//               tickLine={false}
//             />
//             <Tooltip
//               contentStyle={{
//                 backgroundColor: '#1f2937', // Tailwind's gray-800
//                 border: 'none',
//                 color: 'white',
//                 boxShadow: 'none'
//               }}
//               cursor={{ fill: 'transparent' }}
//             />
//             <Bar
//               dataKey="Sales"
//               fill="#4c4ee7d9"
//               radius={[4, 4, 0, 0]}
//               barSize={13}
//             />
//             <Bar
//               dataKey="Revenue"
//               fill="#0284c7"
//               radius={[4, 4, 0, 0]}
//               barSize={13}
//             />
//           </BarChart>
//         </ResponsiveContainer>
//       </CardContent>
//     </Card>
//   );
// }


'use client';

import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/UI/Car';
import Image from 'next/image';
import dots from '@/assets/dots.svg';
import RadioGroup from './Radiogroup';

const data = [
  { name: '06:00', Sales: 5200, Revenue: 4100 },
  { name: '07:00', Sales: 4800, Revenue: 3900 },
  { name: '08:00', Sales: 6100, Revenue: 4500 },
  { name: '09:00', Sales: 7000, Revenue: 5200 },
  { name: '10:00', Sales: 6400, Revenue: 5000 },
  { name: '11:00', Sales: 6800, Revenue: 5300 },
  { name: 'Jul', Sales: 7200, Revenue: 5500 },
  { name: 'Aug', Sales: 6900, Revenue: 5400 },
  { name: 'Sep', Sales: 6300, Revenue: 4900 },
  { name: 'Oct', Sales: 7500, Revenue: 5800 },
  { name: 'Nov', Sales: 7700, Revenue: 6000 },
  { name: 'Dec', Sales: 8100, Revenue: 6200 },
];

export default function BarChartMultiple() {
  return (
    <Card className="bg-[#0e0f11] border border-gray-800 rounded-xl overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle className="flex w-full items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <p className="text-lg font-semibold text-gray-100 tracking-tight">
              Sales & Revenue Overview
            </p>
            <span className="opacity-70">
              <Image src={dots} alt="menu" />
            </span>
          </div>
          <div className="flex-shrink-0">
            <RadioGroup />
          </div>
        </CardTitle>
    
      </CardHeader>
      <CardContent className="h-[320px] pt-2">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barCategoryGap={18}>
            <XAxis
              dataKey="name"
              stroke="#9ca3af"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12 }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#111827', // Tailwind's gray-900
                border: '1px solid #1f2937',
                borderRadius: '6px',
                padding: '8px 12px',
                color: '#f9fafb',
                boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
              }}
              cursor={{ fill: 'rgba(255,255,255,0.05)' }}
            />
            <Bar
              dataKey="Sales"
               fill="#4c4ee7d9"
              radius={[4, 4, 0, 0]}
              barSize={14}
            />
            <Bar
              dataKey="Revenue"
              fill="#0284c7"
              radius={[4, 4, 0, 0]}
              barSize={14}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
