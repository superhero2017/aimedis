import React from 'react';
import PropTypes from 'prop-types';
import ScrollAnimation from 'react-animate-on-scroll';
import BlogItem from 'components/BlogItem';
import CustomVideo from 'components/CustomVideo';
import { Link } from 'react-router-dom';

const BlogDetail = ({ match }) => (
  <div key="BlogDetail" className="app__blog__detail app__route">
    <p className="d-none">{match.params.id}</p>
    <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
      <div className="app__blog__detail__image">
        <img src={require('assets/media/images/blogdetail.png')} alt="No Asset" />
      </div>
    </ScrollAnimation>
    <div className="container">
      <section className="app__blog__detail__section1">
        <div className="row">
          <div className="col-12">
            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
              <p className="app__blog__detail__section1__title">AR and VR are the new tools in your doctor’s bag</p>
            </ScrollAnimation>
          </div>
          <div className="col-12 col-lg-8 offset-lg-2 app__blog__detail__section1__content">
            <div className="app__blog__detail__section1__content__info">
              <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
                <div className="app__blog__detail__section1__content__info__share">
                  <div className="app__blog__detail__section1__content__info__share__element">
                    <div className="app__blog__detail__section1__content__info__share__element__icon">
                      <img src={require('assets/media/icons/writer.png')} alt="No Asset" />
                    </div>
                    <div className="app__blog__detail__section1__content__info__share__element__text">
                      Chris Welch
                    </div>
                  </div>
                  <div className="app__blog__detail__section1__content__info__share__element">
                    <div className="app__blog__detail__section1__content__info__share__element__icon">
                      <img src={require('assets/media/icons/date.png')} alt="No Asset" />
                    </div>
                    <div className="app__blog__detail__section1__content__info__share__element__text">
                      2 WEEKS AGO
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
                <div className="app__blog__detail__section1__content__info__link d-none d-lg-flex">
                  <Link className="app__blog__detail__section1__content__info__link__element" to="#">
                    <img src={require('assets/media/icons/facebook.png')} alt="No Asset" />
                  </Link>
                  <Link className="app__blog__detail__section1__content__info__link__element" to="#">
                    <img src={require('assets/media/social/Group 9.png')} alt="No Asset" />
                  </Link>
                  <Link className="app__blog__detail__section1__content__info__link__element" to="#">
                    <img src={require('assets/media/icons/linkedin.png')} alt="No Asset" />
                  </Link>
                </div>
              </ScrollAnimation>
            </div>
            <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
              <hr />
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
              <p className="app__blog__detail__section1__content__description first__letter">
                Medicine has always been an obscure discipline to practise doctor has been looking at with awe and respect, and until quite recently, was often an unapproachable person. However, this is changing rapidly. He is a service provider and you, the patient, are a consumer, and thus protected by the prevailing consumer laws.
              </p>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
              <p className="app__blog__detail__section1__content__subtitle">Being good at medicine is not good enough</p>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
              <p className="app__blog__detail__section1__content__description1">
                160 years ago, in 1858, Henry Gray published Gray’s Anatomy – the bible for every doctor. Back then, body snatchers were a prime source of obtaining cadavers for dissections. About 70 years later, the first antibiotic was discovered in the form of penicillin. Fast forward another 40 years, and people were still dying from simple infections. Today, these things would sound so alien! No antibiotics, illegally obtained bodies for dissection, people dying from simple infection rather than grave, life-threatening diseases. Medicine has come a long way since the time of Mr Gray (Surgeons use a Mr instead of Dr in the UK).
              </p>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
              <p className="app__blog__detail__section1__content__description1">
                Today, a doctor is not expected to do his job, he has to be in a sensitive manner, warranted by the profession. He needs to have proper bedside manners in most of the medical schools. However, in the age of technology, this is not enough!
              </p>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
              <div className="app__blog__detail__section1__content__reference">
                <p className="app__blog__detail__section1__content__reference__text">
                  «Today, medical schools have started recruiting the importance of telemedicine in the healthcare ecosystem.»
                </p>
                <p className="app__blog__detail__section1__content__reference__speaker">Irina Danilenko – doctor</p>
              </div>
            </ScrollAnimation>
          </div>
          <div className="col-12 d-none d-lg-block app__blog__detail__section1__content__feature">
            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
              <img src={require('assets/media/images/featrued_blog.png')} alt="No Asset" />
            </ScrollAnimation>
          </div>
          <div className="col-12 col-lg-6 offset-lg-3 d-none d-lg-block">
            <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
              <p className="app__blog__detail__section1__content__description1">Medical advances on the fronts of new drug discoveries have slowed down. Instead, pharmaceuticals are being used to improve their chances. The next big thing is biologicals and personalized medicine.</p>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
              <p className="app__blog__detail__section1__content__description1">However, when it comes to the doctor’s clinic, a lot of things are changing as well. He has the tools to capture the patient’s data without having to spend on his computer. With IoT devices and integrated software, things are becoming easier for doctors. That said, there is still a huge scope for technology in his clinic.</p>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
              <div className="app__blog__detail__section1__content__list">
                <ul>
                  <li>Fashion</li>
                  <li>Design</li>
                  <li>Art</li>
                  <li>Marketing</li>
                  <li>Management</li>
                  <li>Communications</li>
                </ul>
              </div>
            </ScrollAnimation>
          </div>
          <div className="col-12">
            <div className="app__blog__detail__section1__content__video">
              <CustomVideo src="http://media.w3.org/2010/05/bunny/movie.mp4" />
            </div>
            <div className="app__blog__detail__section1__content__share">
              <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
                <div className="app__blog__detail__section1__content__share__text">Like it? Share it!</div>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
                <div className="app__blog__detail__section1__content__share__link">
                  <Link className="app__blog__detail__section1__content__share__link__element" to="#">
                    <img src={require('assets/media/icons/facebook.png')} alt="No Asset" />
                  </Link>
                  <Link className="app__blog__detail__section1__content__share__link__element" to="#">
                    <img src={require('assets/media/social/Group 9.png')} alt="No Asset" />
                  </Link>
                  <Link className="app__blog__detail__section1__content__share__link__element" to="#">
                    <img src={require('assets/media/icons/linkedin.png')} alt="No Asset" />
                  </Link>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>
      <section className="app__blog__detail__section2">
        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
          <div className="app__blog__detail__section2__title">
            You might like these articles too
          </div>
        </ScrollAnimation>
        <div className="app__blog__detail__section2__content">
          <div className="row">
            <div className="col-12 col-lg-4">
              <BlogItem
                item={{
                  id: 1,
                  title: 'Why Japan, the Tech giant, still needs to improve Health Tech',
                  description: 'Aimedis supports patients and doctors by making data available quickly and reliable which results in a quick supports patients and doctors by',
                  src: 'blog1.png',
                }}
              />
            </div>
            <div className="col-12 col-lg-4">
              <BlogItem
                item={{
                  id: 2,
                  title: 'Why diagnosing leprosy in the Philippines is not a big problem any more: Learns',
                  description: 'Aimedis supports patients and doctors by making data available quickly and reliable which results in a quick supports patients and doctors by',
                  src: 'blog2.png',
                }}
              />
            </div>
            <div className="col-12 col-lg-4">
              <BlogItem
                item={{
                  id: 3,
                  title: 'Why diagnosing leprosy in the Philippines is not a big problem any more: Learns',
                  description: 'Aimedis supports patients and doctors by making data available quickly and reliable which results in a quick supports patients and doctors by',
                  src: 'blog3.png',
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
);

BlogDetail.propTypes = {
  match: PropTypes.object,
};

BlogDetail.defaultProps = {
  match: {
    params: {
      id: 1,
    },
  },
};

export default BlogDetail;
