import React, { useState } from 'react';
import styled from 'styled-components';

const Blog = () => {
  const blogPosts = [
    {
      title: 'Introduction to Web Development',
      excerpt: 'This post covers the basics of web development, including HTML, CSS, and JavaScript.',
      fullText: 'This post covers the basics of web development, including HTML, CSS, and JavaScript. Web development is a broad term that encompasses all the work involved in creating a website...',
      link: '/blog/introduction-to-web-development',
    },
    {
      title: 'React vs Angular: Which is Better?',
      excerpt: 'A comparison between two popular frontend frameworks, React and Angular.',
      fullText: 'A comparison between two popular frontend frameworks, React and Angular. Both have their pros and cons, and the choice depends on the project requirements...',
      link: '/blog/react-vs-angular',
    },
    {
      title: 'Understanding Responsive Design',
      excerpt: 'Learn the principles of responsive design and how to make your website look great on any device.',
      fullText: 'Learn the principles of responsive design and how to make your website look great on any device. Responsive design involves using fluid grids, flexible images, and media queries...',
      link: '/blog/responsive-design',
    },
  ];

  return (
    <PageContainer>
      <Heading>Blog</Heading>
      <Paragraph>Here are some articles and updates:</Paragraph>
      <BlogGrid>
        {blogPosts.map((post, index) => (
          <BlogCard key={index}>
            <BlogTitle>{post.title}</BlogTitle>
            <BlogPostContent excerpt={post.excerpt} fullText={post.fullText} />
          </BlogCard>
        ))}
      </BlogGrid>
    </PageContainer>
  );
};

const BlogPostContent = ({ excerpt, fullText }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <BlogExcerpt>{isExpanded ? fullText : excerpt}</BlogExcerpt>
      <ReadMoreButton onClick={toggleExpand}>
        {isExpanded ? 'Show Less' : 'Read More'}
      </ReadMoreButton>
    </>
  );
};


const PageContainer = styled.div`
  padding: 40px;
  color: white;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;


const Heading = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;


const Paragraph = styled.p`
  font-size: 1.2rem;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;


const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;


const BlogCard = styled.div`
  background-color: #333;
  padding: 20px;
  border-radius: 8px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;


const BlogTitle = styled.h3`
  font-size: 1.5rem;
  color: #00ffff;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;


const BlogExcerpt = styled.p`
  margin: 10px 0;
  font-size: 1rem;
  color: #ccc;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;


const ReadMoreButton = styled.button`
  background-color: #00ffff;
  color: black;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #00ccff;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

export default Blog;
