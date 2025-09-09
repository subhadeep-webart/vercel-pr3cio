import { Image } from '@heroui/react'

const images = [
    'https://www.rollingstone.com/wp-content/uploads/2025/04/Justin-Bieber-Paparazzi-Response.jpg?w=1581&h=1054&crop=1',
    'https://www.billboard.com/wp-content/uploads/stylus/2653739-justin-bieber-2-jingle-ball-617-409.jpg?w=617',
    'https://media.okmagazine.com/brand-img/2snf8s26k/0x0/2013/12/justin-bieber-eoy-22.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-J30CVsH05R9FQtiU7rHOsaJEFP_A4h9t5nsskl3B14VCdDdxF8AvqJAxoCFWbimSGTM&usqp=CAU',
    'https://ew.com/thmb/0l1plgav7fq84D7dYjkxWMzExDw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/justin-bieber_0-9b1f1aacb74340af802f982301be9b12.jpg',
    'https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1239728840.jpg?c=16x9&q=h_833,w_1480,c_fill',
    'https://s.telegraph.co.uk/graphics/projects/justin-bieber/media/justin-bieber-8-mr.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Justin_Bieber_in_Rosemont%2C_Illinois_%282015%29_%28cropped%29.jpg/960px-Justin_Bieber_in_Rosemont%2C_Illinois_%282015%29_%28cropped%29.jpg',
    'https://variety.com/wp-content/uploads/2022/04/Justin-Bieber-1.jpg?w=1000&h=563&crop=1',
    'https://images.wsj.net/im-689715?width=700&height=466',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLCFjKUNx991VlYzHzMuEiEHCVCvQGO4M_dA&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_Snw3wuLTMMbEuW4K01H6hLwHHQDmFEoddw&s',
]

const ImageGallery = () => {
    return (
        <div className='grid grid-cols-2 justify-items-start gap-4 sm:grid-cols-4'>
            {images.map((src, index) => (
                <div
                    key={index}
                    className='relative aspect-square w-full overflow-hidden rounded-[21px]'>
                    <Image
                        src={src}
                        alt={`Justin Bieber ${index + 1}`}
                        classNames={{
                            wrapper:
                                'relative aspect-square w-full h-full',
                        }}
                        className='h-full w-full object-cover'
                    />
                </div>
            ))}
        </div>
    )
}

export default ImageGallery
