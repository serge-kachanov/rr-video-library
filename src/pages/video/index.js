import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const VideoPage = ({ data }) => {
  return (
    <Layout pageTitle="My Videos">
      {
        data.rrapi.videos_with_pagination.items.map((video) => (
          <article key={video.id}>
            <h2>
              {video.title}
            </h2>
            <iframe src={"https://player.vimeo.com/video/" + video.vimeo_id} width="500" height="300" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
            <p>{video.summary}</p>
            <p><small>tag list: {video.tag_list} </small></p>
          </article>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
  query {
    rrapi {
      videos_with_pagination(
        locale: "en"
        limit: 5
      ) {
        items {
          id
          summary
          tag_list
          thumbnail
          title
          vimeo_id
        }
      }
    }
  }`

export const Head = () => <Seo title="My Videos Page" />

export default VideoPage
