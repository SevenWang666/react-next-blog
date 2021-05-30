
import Link from 'next/link';
import { GetStaticProps } from 'next';
import Button from '@material-ui/core/Button';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Grid from '@material-ui/core/Grid';
import Date from '../components/date';

export default function Home ({
  allPostsData,
}: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) {
  return (
    <Layout home>
      <Grid container spacing={3}>
        <Grid item xs>
          <Button variant="contained" >
            <Link href='/settings/users'>
              <a>用户</a>
            </Link>
          </Button>
        </Grid>
        <Grid item xs>
          <Button variant="contained" >
            <Link href='/sign-in/signIn'>
              <a>登录</a>
            </Link>
          </Button>
        </Grid>
        <Grid item xs>
          <Button variant="contained" >
            <Link href='/sign-up/signUp'>
              <a>注册</a>
            </Link>
          </Button>
        </Grid>
        <Grid item xs>
          <Button variant="contained" >
            <Link href='/blog/blog'>
              <a>博客模板</a>
            </Link>
          </Button>
        </Grid>
      </Grid>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
