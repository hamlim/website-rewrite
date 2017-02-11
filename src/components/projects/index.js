import React from 'react';
import Helmet from "react-helmet";
import Anchor from '../anchor';
import Header from '../header/header';
import styles from './styles.css';

const Link = props => <Anchor className={styles.anchor} {...props}/>;
const OutLink = props => <a className={styles.anchor} {...props}/>;

const Projects = (props) => (
  <div className="Projects">
    <Helmet title="Matt Hamlin's Projects" />
    <Header page="Projects" />
    <article className={styles.wrapper}>
      <h3 className={styles.title}>My Projects</h3>
      <ul className={styles.projects}>
        <li className={styles.project}>
          <h4><Link to='./'>MattHamlin.me</Link></h4>
          <p className={styles.description}>
            This website is one of the largest time sinks for me. I consistently spend time testing out other
            techniques, tools, and technologies on this. Over the past two months I have dropped all work on
            anything else (outside of my actual job of course) to revamp this website.
          </p>
        </li>
        <li className={styles.project} >
          <h4><OutLink href="https://goexploring.today">Goexploring.today</OutLink></h4>
          <p className={styles.description}>
            Goexploring.today is like my garage, its where I store all my side projects that I have worked on,
            I am in the process of moving some of the projects into their own domains but for now they all live on
            that domain.
          </p>
        </li>
        <li className={styles.project} >
          <h4><OutLink href="https://goexploring.today/colors">Colors</OutLink></h4>
          <p className={styles.description}>
            Colors was one of my first React projects, and it stands as one of my few projects that uses technology that
            only really evergreen browsers support (right now the bleeding edge of the project is the <code>fetch</code> api.)
          </p>
        </li>
        <li className={styles.project} >
          <h4><OutLink href="https://goexploring.today/Dollar">Dollar</OutLink></h4>
          <p className={styles.description}>
            Dollar was one of my first full on projects. And to this date I still consider it as one of the most ambitious projects
            I have worked on by myself. It involved a lot of crappy JS when I first made it but I am working on refactoring it to
            use react and redux. I think at the moment of writing this it is extremely broken, but I plan on getting back to it
            after I polish off the rest of this website.
          </p>
        </li>
        <li className={styles.project} >
          <h4><OutLink href="https://goexploring.today/bundles">Bundles</OutLink></h4>
          <p className={styles.description}>
            Bundles was I believe the first project that I worked on full time, I think Dollar superseeds it in a few places mainly
            because Dollar was more a fully functioning webapp. Bundles still works to this date, however it never really got to
            a place where I was comfortable with it. I ended up spending more and more time building out Dollar over Bundles.
          </p>
        </li>
      </ul>

    </article>
  </div>
);


export default Projects;
