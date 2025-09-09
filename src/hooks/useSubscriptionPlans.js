// hooks/useSubscriptionPlans.ts
import { useQuery } from '@tanstack/react-query'
import { getUserPackages } from '@/services/api/packages-api'
import queryConstants from '@/constants/query-constants'

export default function useSubscriptionPlans() {
    return useQuery({
        queryKey: [queryConstants.getPackages],
        queryFn: async () => {
            const response = await getUserPackages()
            // Ensure it's valid JSON arrays for features
            return {
                monthly: response.packages.filter(p => p.billingInterval === 'month' && p.isActive),
                yearly: response.packages.filter(p => p.billingInterval === 'year' && p.isActive),
            }
        },
    })
}
