import React from "react";
import { Row, Col, Carousel, Typography, Rate, Card, Breadcrumb } from "antd";
import { useParams, Link, Navigate } from "react-router-dom";

// helpers
import { getSinglePostById } from "../../helpers/server";

const { Title, Paragraph } = Typography;


function SinglePostPage() {
  const match = useParams();

  const postData = getSinglePostById(match.id);

  const breadcrumbList = [
    { title: <Link to="/">Home</Link>, },
    { title: postData?.title, },
  ];

  if (!postData) {
    return <Navigate to="/"/>
  }

  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <Breadcrumb items={breadcrumbList}/>
      </Col>
      <Col span={12}>
        <Carousel>
          {
            postData.images.map(item => (
              <div>
                <img src={item} alt="" />
              </div>
            ))
          }
        </Carousel>
      </Col>
      <Col span={12}>
        <Typography>
          <Title>{ postData.title }</Title>
          <Rate disabled allowHalf defaultValue={postData.rate}/>
          <Title level={3}>{postData.author}</Title>
          <Paragraph>
            { postData.description }
          </Paragraph>
        </Typography>
      </Col>
      <Col span={24}>
        <Row gutter={[24, 24]}>
          <Col span={6}>
            <Card title="Default size card" extra={<a href="#">More</a>}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
          <Col span={6}>
            <Card size="small" title="Small size card" extra={<a href="#">More</a>}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default SinglePostPage;
