const SkeletonRow = () => {
    return (
        <>
            <tr className='animate-pulse'>
                <td className='py-2'>
                    <div className='h-4 w-24 rounded bg-gray-600' />
                </td>
                <td className='py-2'>
                    <div className='h-4 w-16 rounded bg-gray-600' />
                </td>
                <td className='py-2'>
                    <div className='h-4 w-12 rounded bg-gray-600' />
                </td>
            </tr>
        </>
    )
}

export default SkeletonRow
