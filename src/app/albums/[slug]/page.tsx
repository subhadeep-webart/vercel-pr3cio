import { getAlbumDetails } from '@/services/api/album-ep'

import { injectAuthTokenInServerSide } from '@/utils/next-server-utils'
import Container from '@/components/ui/container'

import AlbumDetailsComponent from '../_components/album-details'

type Props = {
    params: Promise<{
        slug: string
    }>
}
export default async function AlbumDetailsPage(props: Props) {
    return (
        <Container>
            <AlbumDetailsComponent />
        </Container>
    )
}
