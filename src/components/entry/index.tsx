/* eslint-disable @next/next/no-img-element */
import styles from '../../../styles/Home.module.css'

interface IEntry {
  image?: {
    src: string
    width?: number
    height?: number
    alt?: string
  }
  caption?: string
  content?: any
}

const Entry = ({ image, caption, content }: IEntry) => <>
  {
    image && <figure className={styles.imageEntry}>
      <img src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
      />
      {
        caption && <figcaption>{caption}</figcaption>
      }
    </figure>
  }
  {
    content && <div className={styles.content}>{content}</div>
  }
</>

export default Entry