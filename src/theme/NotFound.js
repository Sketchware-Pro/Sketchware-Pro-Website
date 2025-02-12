import React from 'react';
import Translate, {translate} from '@docusaurus/Translate';
import {PageMetadata} from '@docusaurus/theme-common';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
export default function NotFound() {
  return (
    <>
      <PageMetadata
        title={translate({
          id: 'theme.NotFound.title',
          message: 'Page Not Found',
        })}
      />
      <Layout>
        <main className="container margin-vert--xl">
          <div className="row">
            <div className="col col--6 col--offset-3">
              <h1 className="hero__title">
                <Translate
                  id="theme.NotFound.title"
                  description="The title of the 404 page">
                  Page Not Found
                </Translate>
              </h1>
              <p>
                <Translate
                  id="theme.NotFound.p1"
                  description="The first paragraph of the 404 page">
                  We could not find what you were looking for.
                </Translate>
              </p>
              <p>
                <p
                  id="theme.NotFound.p2"
                  description="The 2nd paragraph of the 404 page">
                  You're lost. Please contact the Sketchware Pro team (or <Link to='https://discord.gg/Th9FP25TsK'>NiceSapien</Link>) if you think we made a mistake.
                </p>
              </p>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}
