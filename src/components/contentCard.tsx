import Image from '../../node_modules/next/image';

interface ContentCardProps {
    image: string;
    heading: string;
    description: string;
    width: string;
}

const ContentCard = ({ image, heading, description, width }: ContentCardProps) => {
    return (
        <>
            <section className={`content-card ${width}`}>
                <h4>{ heading }</h4>
                <div className='image'>
                    <Image src={ image } width={200} height={150} alt='content' />
                </div>
                <p>
                    { description }
                </p>
            </section>
        </>
    )
}

export default ContentCard;