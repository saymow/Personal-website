import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { graphql } from 'gatsby';

import Layout from '../../components/Layout';
import Head from '../../components/Head';
import PostBadge, { AvailableBadges } from '../../components/PostBadge';

import {
  Container,
  Header,
  BadgesList,
  PostArticle,
  ArrowBack,
} from './styles';

const Blog: React.FC<Props> = ({ data }) => {
  const {
    markdownRemark: {
      frontmatter: { title, date, tags, description },
      html,
      timeToRead,
    },
  } = data;

  return (
    <Layout>
      <Head
        title={title}
        description={description}
        meta={[
          {
            name: 'keywords',
            content: tags.join(', '),
          },
        ]}
      />
      <Container>
        <Header>
          <AniLink paintDrip hex="#121212" to="/blog">
            <ArrowBack />
          </AniLink>
          <h1>{title}</h1>
          <BadgesList>
            {tags.map((tag) => (
              <li key={tag}>
                <PostBadge tag={tag} />
              </li>
            ))}
          </BadgesList>
          <h3>{date}</h3>
          <span>Expected time to read is {timeToRead} minute.</span>
        </Header>
        <PostArticle dangerouslySetInnerHTML={{ __html: html }}></PostArticle>
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
        date(locale: "en-us", formatString: "MMMM DD[,] YYYY")
        tags
      }
      timeToRead
      html
    }
  }
`;

interface Props extends React.FC {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string;
        description: string;
        date: string;
        tags: AvailableBadges[];
      };
      html: string;
      timeToRead: number;
    };
  };
}

export default Blog;
