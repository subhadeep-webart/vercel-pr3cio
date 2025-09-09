import { getUserProfile } from '@/services/api/user-ep'

import { injectAuthTokenInServerSide } from '@/utils/next-server-utils'

import UserDetails from './_components/user-details.jsx'

const ProfilePage = async () => {
    await injectAuthTokenInServerSide()
    const data = await getUserProfile()
    return <div>{data && <UserDetails data={data.user} />}</div>
}

export default ProfilePage
