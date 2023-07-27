import React from "react";
import { Col, Row } from "antd";
import DetailsNews from "./DetailsNews";

const News = ({ allPosts }) => {
  console.log("allPosts", allPosts?.data);
  const posts = allPosts?.data;
  return (
    <div>
      <Row>
        {posts?.map((post) => (
          <Col span={8} key={post._id}>
            <DetailsNews post={post}></DetailsNews>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default News;
