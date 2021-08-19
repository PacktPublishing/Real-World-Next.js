import Link from 'next/link';
import Image from 'next/image';
import { cutTextToLength, composeArticleSlug } from '../../utils';

export default function ArticleCard(article) {
  const articleURL = `/articles/${composeArticleSlug(article.id, article.title)}`;

  return (
    <Link href={articleURL} passHref>
      <a className="w-full rounded-sm bg-white rounded-b-md shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
        <div className="relative w-full h-44">
          <Image
            src={article.image.url}
            alt={article.title}
            layout="fill"
            objectFit="cover"
            className="rounded-t-md"
          />
        </div>
        <div className="p-2">
          <h1 className="text-xl font-bold leading-2 h-16">{article.title}</h1>
          <div className="mt-2 text-sm">{cutTextToLength(article.body, 100)}</div>
          <hr className="divide-solid border-blue-50 mt-4 mb-4" />
          <div className="text-sm">Written by {article.author.name}</div>
        </div>
      </a>
    </Link>
  );
}
