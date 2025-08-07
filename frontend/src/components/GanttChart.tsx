import Chart from 'react-google-charts';

interface GanttChartProps {
  subscriptions: any[];
}

export default function GanttChart({ subscriptions }: GanttChartProps) {
  const columns = [
    { type: 'string', label: 'Task ID' },
    { type: 'string', label: 'Task Name' },
    { type: 'date', label: 'Start Date' },
    { type: 'date', label: 'End Date' },
    { type: 'number', label: 'Duration' },
    { type: 'number', label: 'Percent Complete' },
    { type: 'string', label: 'Dependencies' },
  ];

  const rows = subscriptions.map((sub) => {
    const start = new Date(sub.start_date);
    const end = new Date(start);
    if (sub.billing_cycle === 'monthly') {
      end.setMonth(end.getMonth() + 1);
    } else {
      end.setFullYear(end.getFullYear() + 1);
    }
    return [
      sub.id,
      sub.service_name,
      start,
      end,
      null,
      100,
      null,
    ];
  });

  const data = [columns, ...rows];

  return (
    <Chart
      width={'100%'}
      height={'400px'}
      chartType="Gantt"
      loader={<div>Loading Chart</div>}
      data={data}
      options={{
        gantt: {
          trackHeight: 30,
        },
      }}
    />
  );
}