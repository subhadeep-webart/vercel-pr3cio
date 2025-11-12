const LyricsSkeleton = () => {
    return (
        <div className="space-y-2 w-full">
            {[...Array(6)].map((_, i) => (
                <div
                    key={i}
                    className="h-4 bg-gray-700 rounded animate-pulse"
                    style={{ width: `${100 - i * 10}%` }}
                />
            ))}
            {[...Array(6)].map((_, i) => (
                <div
                    key={i}
                    className="h-4 bg-gray-700 rounded animate-pulse"
                    style={{ width: `${100 - i * 10}%` }}
                />
            ))}
        </div>
    );
};

export default LyricsSkeleton;
