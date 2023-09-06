import React, { useState } from "react";
import { styled } from "styled-components";

const Container = styled.div`
  display: flexbox;
  background: darkgrey;
  width: 100vw;
  height: 100vh;
`;
const HeaderWrapper = styled.div`
  display: flexbox;
  text-align: center;
`;
const Header = styled.h1`
  margin: 0px;
`;
const StyledButton = styled.button``;

const Title = styled.h3``;

const Description = styled.div``;

function PuppiesComponentPage() {
  const [searchQuery, setSearchQuery] = useState("");
 
  return (
    <Container>
      <HeaderWrapper>
        <Header>What is your favorite puppy?</Header>
      </HeaderWrapper>
      

        <StyledButton onClick={() => setSearchQuery("All")}> All</StyledButton>
        <StyledButton onClick={() => setSearchQuery("Red")}> Red</StyledButton>
        <StyledButton onClick={() => setSearchQuery("Brown")}> Brown</StyledButton>
        <StyledButton onClick={() => setSearchQuery("Yellow")}> Yellow</StyledButton>
        <StyledButton onClick={() => setSearchQuery("White")}> White</StyledButton>
      

      
    </Container>
  );
}

export default PuppiesComponentPage;

const data = {
  id: "ThXg4mVJUqI",
  slug: "a-small-brown-and-white-dog-sitting-in-the-grass-ThXg4mVJUqI",
  created_at: "2023-07-01T06:41:21Z",
  updated_at: "2023-09-06T05:39:14Z",
  promoted_at: null,
  width: 5100,
  height: 3400,
  color: "#264026",
  blur_hash: "L77xmpIB8y9@Su%LWENKD%oyt7$+",
  description: null,
  alt_description: "a small brown and white dog sitting in the grass",
  breadcrumbs: [],
  urls: {
    raw: "https://images.unsplash.com/photo-1688193316957-bd765ddb73a4?ixid=M3w0OTg0Nzl8MHwxfHNlYXJjaHw0fHxyZWQtcHVwcHl8ZW58MHx8fHwxNjk0MDA1NDI0fDA&ixlib=rb-4.0.3",
    full: "https://images.unsplash.com/photo-1688193316957-bd765ddb73a4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0OTg0Nzl8MHwxfHNlYXJjaHw0fHxyZWQtcHVwcHl8ZW58MHx8fHwxNjk0MDA1NDI0fDA&ixlib=rb-4.0.3&q=85",
    regular:
      "https://images.unsplash.com/photo-1688193316957-bd765ddb73a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTg0Nzl8MHwxfHNlYXJjaHw0fHxyZWQtcHVwcHl8ZW58MHx8fHwxNjk0MDA1NDI0fDA&ixlib=rb-4.0.3&q=80&w=1080",
    small:
      "https://images.unsplash.com/photo-1688193316957-bd765ddb73a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTg0Nzl8MHwxfHNlYXJjaHw0fHxyZWQtcHVwcHl8ZW58MHx8fHwxNjk0MDA1NDI0fDA&ixlib=rb-4.0.3&q=80&w=400",
    thumb:
      "https://images.unsplash.com/photo-1688193316957-bd765ddb73a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTg0Nzl8MHwxfHNlYXJjaHw0fHxyZWQtcHVwcHl8ZW58MHx8fHwxNjk0MDA1NDI0fDA&ixlib=rb-4.0.3&q=80&w=200",
    small_s3:
      "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1688193316957-bd765ddb73a4",
  },
  links: {
    self: "https://api.unsplash.com/photos/a-small-brown-and-white-dog-sitting-in-the-grass-ThXg4mVJUqI",
    html: "https://unsplash.com/photos/a-small-brown-and-white-dog-sitting-in-the-grass-ThXg4mVJUqI",
    download:
      "https://unsplash.com/photos/ThXg4mVJUqI/download?ixid=M3w0OTg0Nzl8MHwxfHNlYXJjaHw0fHxyZWQtcHVwcHl8ZW58MHx8fHwxNjk0MDA1NDI0fDA",
    download_location:
      "https://api.unsplash.com/photos/ThXg4mVJUqI/download?ixid=M3w0OTg0Nzl8MHwxfHNlYXJjaHw0fHxyZWQtcHVwcHl8ZW58MHx8fHwxNjk0MDA1NDI0fDA",
  },
  likes: 0,
  liked_by_user: false,
  current_user_collections: [],
  sponsorship: null,
  topic_submissions: {},
  user: {
    id: "SJzPPFQPljY",
    updated_at: "2023-08-18T11:13:42Z",
    username: "anotherxlife",
    name: "anotherxlife",
    first_name: "anotherxlife",
    last_name: null,
    twitter_username: null,
    portfolio_url: "https://anotherxlife.com",
    bio: "Music producer, graphic designer and content creator.",
    location: null,
    links: {
      self: "https://api.unsplash.com/users/anotherxlife",
      html: "https://unsplash.com/@anotherxlife",
      photos: "https://api.unsplash.com/users/anotherxlife/photos",
      likes: "https://api.unsplash.com/users/anotherxlife/likes",
      portfolio: "https://api.unsplash.com/users/anotherxlife/portfolio",
      following: "https://api.unsplash.com/users/anotherxlife/following",
      followers: "https://api.unsplash.com/users/anotherxlife/followers",
    },
    profile_image: {
      small:
        "https://images.unsplash.com/profile-1680582965193-72ceb898eee3image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
      medium:
        "https://images.unsplash.com/profile-1680582965193-72ceb898eee3image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
      large:
        "https://images.unsplash.com/profile-1680582965193-72ceb898eee3image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
    },
    instagram_username: "anotherxbeats",
    total_collections: 2,
    total_likes: 0,
    total_photos: 20,
    accepted_tos: true,
    for_hire: false,
    social: {
      instagram_username: "anotherxbeats",
      portfolio_url: "https://anotherxlife.com",
      twitter_username: null,
      paypal_email: null,
    },
  },
  tags: [
    {
      type: "landing_page",
      title: "puppy",
      source: {
        ancestry: {
          type: {
            slug: "images",
            pretty_slug: "Images",
          },
          category: {
            slug: "animals",
            pretty_slug: "Animals",
          },
          subcategory: {
            slug: "puppies",
            pretty_slug: "Puppies",
          },
        },
        title: "Puppies images & pictures",
        subtitle: "Download free images of puppies",
        description:
          "Is there anything more emotive and endearing than images of puppies? No? Well, how about flawless, HD images of puppies taken by passionate professional photographers? Unsplash has over 900 puppy images to choose from. Beware of cuteness overload.",
        meta_title: "Puppies Pictures | Download Free Images on Unsplash",
        meta_description:
          "Choose from hundreds of free puppies pictures. Download HD puppies photos for free on Unsplash.",
        cover_photo: {
          id: "-AYS6hFdp7U",
          slug: "-AYS6hFdp7U",
          created_at: "2018-12-07T15:50:16Z",
          updated_at: "2023-09-04T08:05:29Z",
          promoted_at: null,
          width: 6000,
          height: 4002,
          color: "#f3f3f3",
          blur_hash: "LeP%CX9FyE_4%g%Ln#V?kWt8IUIU",
          description:
            "She’s been with us for only a few weeks, but is now very much part of the family",
          alt_description: "medium-coated tan puppy on white textile",
          breadcrumbs: [],
          urls: {
            raw: "https://images.unsplash.com/photo-1544197807-bb503430e22d?ixlib=rb-4.0.3",
            full: "https://images.unsplash.com/photo-1544197807-bb503430e22d?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
            regular:
              "https://images.unsplash.com/photo-1544197807-bb503430e22d?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
            small:
              "https://images.unsplash.com/photo-1544197807-bb503430e22d?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
            thumb:
              "https://images.unsplash.com/photo-1544197807-bb503430e22d?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max",
            small_s3:
              "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1544197807-bb503430e22d",
          },
          links: {
            self: "https://api.unsplash.com/photos/-AYS6hFdp7U",
            html: "https://unsplash.com/photos/-AYS6hFdp7U",
            download: "https://unsplash.com/photos/-AYS6hFdp7U/download",
            download_location:
              "https://api.unsplash.com/photos/-AYS6hFdp7U/download",
          },
          likes: 234,
          liked_by_user: false,
          current_user_collections: [],
          sponsorship: null,
          topic_submissions: {},
          premium: false,
          plus: false,
          user: {
            id: "t7XcCH2m2p0",
            updated_at: "2023-09-01T02:52:18Z",
            username: "jawis",
            name: "Wai Siew",
            first_name: "Wai",
            last_name: "Siew",
            twitter_username: null,
            portfolio_url: null,
            bio: null,
            location: null,
            links: {
              self: "https://api.unsplash.com/users/jawis",
              html: "https://unsplash.com/@jawis",
              photos: "https://api.unsplash.com/users/jawis/photos",
              likes: "https://api.unsplash.com/users/jawis/likes",
              portfolio: "https://api.unsplash.com/users/jawis/portfolio",
              following: "https://api.unsplash.com/users/jawis/following",
              followers: "https://api.unsplash.com/users/jawis/followers",
            },
            profile_image: {
              small:
                "https://images.unsplash.com/profile-1660659680353-318354bc7fd6image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
              medium:
                "https://images.unsplash.com/profile-1660659680353-318354bc7fd6image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
              large:
                "https://images.unsplash.com/profile-1660659680353-318354bc7fd6image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
            },
            instagram_username: "Jawis",
            total_collections: 6,
            total_likes: 530,
            total_photos: 109,
            accepted_tos: true,
            for_hire: false,
            social: {
              instagram_username: "Jawis",
              portfolio_url: null,
              twitter_username: null,
              paypal_email: null,
            },
          },
        },
      },
    },
    {
      type: "search",
      title: "puppy dog",
    },
    {
      type: "search",
      title: "red puppy",
    },
  ],
};
