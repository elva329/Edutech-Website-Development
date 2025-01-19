import React from 'react'

const PrivacyPolicyContent = () => {
  return (
    <>
      <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
                <div className='text-center mb-10 text-4xl font-bold'>Privacy Policy</div>

                <p className="text-body-color dark:text-body-color-dark text-base">
                  <div className='mb-2'>
                    <span className='font-bold text-2xl'> Who we are</span><br />
                    <span className='font-bold'>Suggested text:</span> Our website address is: https://learnnex.in.
                  </div>
                  <br />

                  <div className='mb-2'>
                    <span className='font-bold text-2xl'>Comments</span><br />
                    <span className='font-bold'>Suggested text:</span>  When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor’s IP address and browser user agent string to help spam detection.<br /><br />
                    An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. The Gravatar service privacy policy is available here: https://automattic.com/privacy/. After approval of your comment, your profile picture is visible to the public in the context of your comment.
                  </div>
                  <br />

                  <div className='mb-2'>
                    <span className='font-bold text-2xl'>Media</span> <br />
                    <span className='font-bold'>Suggested text:</span> If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.
                  </div>
                  <br />

                  <div className='mb-2'>
                    <span className='font-bold text-2xl'> Cookies</span> <br />
                    <span className='font-bold'>Suggested text:</span> If you leave a comment on our site you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year.<br />
                    If you visit our login page, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser.<br /><br />
                    When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select "Remember Me", your login will persist for two weeks. If you log out of your account, the login cookies will be removed.<br /><br />
                    If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data and simply indicates the post ID of the article you just edited. It expires after 1 day.<br />
                  </div>
                  <br />

                  <div className='mb-2'>
                    <span className='font-bold text-2xl'> Embedded content from other websites</span> <br />
                    <span className='font-bold'>Suggested text:</span> Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.<br /><br />
                    These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website.<br />
                  </div>
                  <br />

                  <div className='mb-2'>
                    <span className='font-bold text-2xl'> Who we share your data with</span>   <br />
                    <span className='font-bold'>Suggested text:</span>If you request a password reset, your IP address will be included in the reset email.<br />
                  </div>
                  <br />

                  <div className='mb-2'>
                    <span className='font-bold text-2xl'> How long we retain your data</span> <br />
                    <span className='font-bold'>Suggested text:</span>If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any follow-up comments automatically instead of holding them in a moderation queue.<br /><br />
                    For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information.<br />
                  </div>
                  <br />

                  <div className='mb-2'>
                    <span className='font-bold text-2xl'> What rights you have over your data</span> <br />
                    <span className='font-bold'>Suggested text:</span>If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.
                  </div>
                  <br />

                  <div className='mb-2'>
                    <span className='font-bold text-2xl'>Where your data is sent</span><br />
                    <span className='font-bold'>Suggested text:</span> Visitor comments may be checked through an automated spam detection service.
                  </div>
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PrivacyPolicyContent