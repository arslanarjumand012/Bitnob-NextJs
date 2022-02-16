import {
  BitNobButton,
  BitNobContainer,
  BitNobLink,
  getLayout,
  Page,
  PreFooter,
} from "components";
import Link from "next/link";
import { useRouter } from "next/router";
import { bitnobPlayStore, bitnobAppleStore } from "app-constants";
import { AppStore, PlayStore } from "public";
import { BiUserCircle } from "react-icons/bi";
import { AiFillCalendar } from "react-icons/ai";
import { FaTags, FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";
import blogPageData from "static/blog-static";
import Card from "components/UI/Card/Card";

const BLOG_URL = "https://blog.bitnob.com";
const CONTENT_KEY = "c0027dbf06dc327cb24ce5e23b";

export async function getStaticPaths() {
  const res = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_KEY}`
  ).then((res) => res.json());

  const paths = res.posts.map((post) => ({
    params: { postDate: post.published_at.slice(0, 10).toString() },
  }));

  return { paths, fallback: false };
}

export const getStaticProps = async ({}) => {
  const res1 = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_KEY}`
  );
  const post = await res1.json();

  return { props: { post: post.posts } };
};

const date = ({ post }) => {
  const router = useRouter();

  const paramDate = router.query.postDate;

  // const objDate = post[0].published_at.slice(0, 10);
  const postDate = post.filter(item => {
    return item.published_at.slice(0,10) === paramDate
  })

  console.log(postDate.length);

  const unfomatedDate = postDate[0].published_at.slice(0, 10)

  let formatedDate = new Date(unfomatedDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <Page title="Bitnob Blog Post Date">
        <div className="bg-gradient-to-b from-white via-bitGreen-50 z-0 overflow-x-hidden relative pt-5 pb-0">
          <div className="pt-6 pb-20 lg:pl-28 lg:pr-28">
            <BitNobContainer>
              <div className="bg-bitGreen-50 w-full rounded-2xl mt-5 p-10 pl-0 pr-0 text-center md:flex sm:block justify-center items-center">
                <h1 className="text-lg font-bold md:mr-20 md:mb-0 mr-0 mb-7">
                  {blogPageData.section1.heading}
                </h1>
                <button
                  type="button"
                  className="p-3 pl-7 pr-7 rounded-xl text-sm font-bold bg-bitGreen-200"
                >
                  {blogPageData.section1.btnText}
                </button>
              </div>
              <div className="w-full mt-10">
                <h1 className="text-center text-3xl font-bold">
                    {formatedDate}
                </h1>
              </div>
              <div className="w-full mt-10 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
                {post.map((obj) => {
                  const objDate = obj.published_at.slice(0, 10);
                  return (
                    <>
                      {objDate === paramDate && (
                        <Card
                          key={obj.id}
                          slug={obj.slug}
                          image={
                            obj.feature_image
                              ? obj.feature_image
                              : "../../images/blog-default.jpeg"
                          }
                          title={obj.title}
                          description={obj.excerpt}
                        />
                      )}
                    </>
                  );
                })}
              </div>
            </BitNobContainer>
          </div>
        </div>
        <PreFooter />
      </Page>
    </>
  );
};

date.getLayout = getLayout;

export default date;
