export default function StatsSection({ stats = [] }) {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {stats.map((s, idx) => (
                <div key={idx} className="text-center">
                    <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400">
                        {s.value}
                    </div>
                    <div className="text-gray-600 dark:text-gray-300">
                        {s.label}
                    </div>
                </div>
            ))}
        </div>
    );
}
