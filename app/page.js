import Link from "next/link";
import classes from "./page.module.css"
import ImageSlideshow from "@/components/images/image-slideshow";

export default function Home() {
  const navlist = [
    { 'name': 'Join the Community', 'link': '/community' },
    { 'name': 'Explore Meals', 'link': '/meals' },
  ]
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow />
        </div>
        <div>
          <div className={classes.hero}>
            <h1>NextLevel Food for NextLevel Foodies</h1>
            <p>Taste and Share Food from all over the World</p>
          </div>
          <div className={classes.cta}>
            {navlist.map((item, index) => {
              return (
                <Link href={item.link} key={index}>{item.name}</Link>
              )
            })}
          </div>
        </div>
      </header>
      <main>
        <section className={classes.section}>
          <h2>How it works</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section className={classes.section}>
          <h2>Why NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
