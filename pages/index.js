import ProjectCard from '../components/ProjectCard'
import BlogPostPreview from '../components/BlogPostPreview'
import { getSortedPosts } from '../lib/mdx'

const projects = [
  {
    title: 'Codeshare',
    description:
      'A platform where developers can share their best code snippets and find solutions to coding problems',
    tags: ['Next.js', 'Styled-components', 'GraphQL', 'PostgreSQL', 'Hasura'],
    link: 'https://codeshare.tech/',
    githubLink: 'https://github.com/mattiapomelli/codeshare',
  },
  {
    title: 'Countrip',
    description:
      'An interactive map showing information and statistics about world countries',
    tags: ['React', 'REST Countries API', 'Leaflet Maps'],
    link: 'https://countrip.netlify.app/',
    githubLink: 'https://github.com/mattiapomelli/countrip',
  },
]

export default function Home({ latestPosts }) {
  return (
    <>
      <h1 className="text-4.5xl md:text-6xl font-extrabold mb-4 mt-8 tracking-tight">
        Hey, I'm Mattia
      </h1>
      <p className="md:text-lg mb-16 ml-0.5 text-dark-gray dark:text-gray-300">
        I'm a full stack web developer. I'm always focused on learning modern
        technologies, and striving to provide value to people through quality
        software.
      </p>

      <h3 className="text-4.5xl md:text-5xl font-extrabold mb-3 mt-8 tracking-tight">
        Projects
      </h3>
      <p className="md:text-lg ml-0.5 text-dark-gray dark:text-gray-300">
        Some of the last projects I've been working on
      </p>
      <div className="grid grid-cols-1 md:grid-cols-autofill gap-4 mt-6 mb-20">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>

      <h3 className="text-4.5xl md:text-5xl font-extrabold mb-3 mt-8 tracking-tight">
        Articles
      </h3>
      <p className="md:text-lg ml-0.5 mb-8 text-dark-gray dark:text-gray-300">
        Some articles that I've written about coding and technology
      </p>
      {latestPosts.map((post) => (
        <BlogPostPreview key={post.slug} {...post} />
      ))}
    </>
  )
}

export async function getStaticProps() {
  const posts = getSortedPosts()

  return {
    props: {
      latestPosts: posts.slice(0, 3),
    },
  }
}
