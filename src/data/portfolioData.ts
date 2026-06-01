import commercialAdImg from "@/assets/commercial-ad.png";
import instagramReelImg from "@/assets/instagram-reel.png";
import weddingHighlightImg from "@/assets/wedding-highlight.png";
import brandCampaignImg from "@/assets/brand-campaign.png";
import corporateVideoImg from "@/assets/corporate-video.png";
import motionGraphicsImg from "@/assets/motion-graphics.png";

export interface VideoProject {
  id: string;
  title: string;
  thumbnail: string;
  videoUrl: string;
}

export interface PortfolioCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  projectCount: number;
  projectCountText: string;
  image: string;
  videos: VideoProject[];
  aspectRatio: "16/9" | "9/16";
}

export const portfolioCategories: PortfolioCategory[] = [
  {
    id: "commercial-ad",
    title: "Commercial Ad",
    subtitle: "Commercial Video Editing",
    description: "Showcasing high-converting advertisements and promotional campaigns crafted for brands and businesses.",
    projectCount: 2,
    projectCountText: "2 Projects →",
    image: commercialAdImg,
    aspectRatio: "16/9",
    videos: [
      {
        id: "comm-1",
        title: "Adyapan Web Intro Spot",
        thumbnail: commercialAdImg,
        videoUrl: "https://res.cloudinary.com/dvwmxd3kr/video/upload/v1780338633/Adyapan_Web_Site_Intro_ncfxuu.mp4"
      },
      {
        id: "comm-2",
        title: "Phonepe Advertisement Film",
        thumbnail: commercialAdImg,
        videoUrl: "https://res.cloudinary.com/dvwmxd3kr/video/upload/v1780337540/Phonepe_Ad_f1frfq.mov"
      }
    ]
  },
  {
    id: "instagram-reel",
    title: "Instagram Reel",
    subtitle: "Short Form Content Editing",
    description: "Showcasing high-converting Instagram reels and vertical shorts optimized for audience retention.",
    projectCount: 2,
    projectCountText: "2 Projects →",
    image: instagramReelImg,
    aspectRatio: "9/16",
    videos: [
      {
        id: "reel-1",
        title: "Telangana Basketball Event Reel (2nd Edit)",
        thumbnail: instagramReelImg,
        videoUrl: "https://res.cloudinary.com/dvwmxd3kr/video/upload/v1780338362/Telangana_Basket_Ball_Reel_2nd_h1qrjq.mp4"
      },
      {
        id: "reel-2",
        title: "Telangana Basketball Championship Highlight Reel",
        thumbnail: instagramReelImg,
        videoUrl: "https://res.cloudinary.com/dvwmxd3kr/video/upload/v1780338326/Telangana_Basket_Ball_Reel_lbm7ii.mp4"
      }
    ]
  },
  {
    id: "wedding-highlight",
    title: "Wedding Highlight",
    subtitle: "Wedding Video Editing",
    description: "Showcasing high-converting cinematic pre-wedding highlights and intimate storytelling films.",
    projectCount: 1,
    projectCountText: "1 Project →",
    image: weddingHighlightImg,
    aspectRatio: "9/16",
    videos: [
      {
        id: "wed-1",
        title: "Cinematic Pre-Wedding Intimate Film",
        thumbnail: weddingHighlightImg,
        videoUrl: "https://res.cloudinary.com/dvwmxd3kr/video/upload/v1780338120/Pre_wedding_Reel_gllked.mp4"
      }
    ]
  },
  {
    id: "brand-campaign",
    title: "Brand Campaign",
    subtitle: "Brand Campaign Editing",
    description: "Showcasing high-converting advertisements, lifestyle branding, and campaigns crafted for brands and businesses.",
    projectCount: 3,
    projectCountText: "3 Projects →",
    image: brandCampaignImg,
    aspectRatio: "16/9",
    videos: [
      {
        id: "brand-1",
        title: "Luxury Real Estate Promotional Showcase",
        thumbnail: brandCampaignImg,
        videoUrl: "https://res.cloudinary.com/dvwmxd3kr/video/upload/v1780337667/Real_estate_Reel_doofxw.mov"
      },
      {
        id: "brand-2",
        title: "S-TEAM Professional Animation Showreel",
        thumbnail: brandCampaignImg,
        videoUrl: "https://res.cloudinary.com/dvwmxd3kr/video/upload/v1780337386/S_TEAM_Animation_Reel_tpb3kg.mov"
      },
      {
        id: "brand-3",
        title: "Sai Priya Catering Culinary Campaign",
        thumbnail: brandCampaignImg,
        videoUrl: "https://res.cloudinary.com/dvwmxd3kr/video/upload/v1780336894/SAI_PRIYA_CATERING_REEL_iztorx.mp4"
      }
    ]
  },
  {
    id: "corporate-video",
    title: "Corporate Video",
    subtitle: "Corporate Video Editing",
    description: "Showcasing high-converting corporate films, business campaigns, and historical communication AVs.",
    projectCount: 6,
    projectCountText: "6 Projects →",
    image: corporateVideoImg,
    aspectRatio: "16/9",
    videos: [
      {
        id: "corp-1",
        title: "KTR Executive Audio-Visual Narrative",
        thumbnail: corporateVideoImg,
        videoUrl: "https://res.cloudinary.com/dvwmxd3kr/video/upload/v1780338763/KTR_AV_h45ily.mp4"
      },
      {
        id: "corp-2",
        title: "Naveen Yadav Political Election Campaign Reel",
        thumbnail: corporateVideoImg,
        videoUrl: "https://res.cloudinary.com/dvwmxd3kr/video/upload/v1780338398/NAVEEN_YADAV_Campaign_REEL_m82erc.mp4"
      },
      {
        id: "corp-3",
        title: "CM KCR Birthday Special Tribute Film",
        thumbnail: corporateVideoImg,
        videoUrl: "https://res.cloudinary.com/dvwmxd3kr/video/upload/v1780338278/CM_KCR_Birthday_die6k2.mp4"
      },
      {
        id: "corp-4",
        title: "Minister Rajini Public Address Campaign Film",
        thumbnail: corporateVideoImg,
        videoUrl: "https://res.cloudinary.com/dvwmxd3kr/video/upload/v1780338253/Minister_Rajini_jz3vhb.mp4"
      },
      {
        id: "corp-5",
        title: "MLA Son Vijith 100 Days Election Campaign Video",
        thumbnail: corporateVideoImg,
        videoUrl: "https://res.cloudinary.com/dvwmxd3kr/video/upload/v1780338154/MLA_SON_VIJITH100Days_Campaign_Video_cjtf2d.mp4"
      },
      {
        id: "corp-6",
        title: "Corporate Identity & Business Heritage Film",
        thumbnail: corporateVideoImg,
        videoUrl: "https://res.cloudinary.com/dvwmxd3kr/video/upload/v1780337491/b1f1fb52-5461-4295-be46-19242c9eb269_jglo5g.mov"
      }
    ]
  },
  {
    id: "motion-graphics",
    title: "Motion Graphics",
    subtitle: "Motion Graphics & Animation",
    description: "Showcasing high-converting typography, explainers, and vector animations crafted for brands and businesses.",
    projectCount: 6,
    projectCountText: "6 Projects →",
    image: motionGraphicsImg,
    aspectRatio: "9/16",
    videos: [
      {
        id: "mg-1",
        title: "Marwadi Business Explainer Graphics",
        thumbnail: motionGraphicsImg,
        videoUrl: "https://res.cloudinary.com/dvwmxd3kr/video/upload/v1780339209/Marwadi_Business_Reelmp4_l5qhg3.mp4"
      },
      {
        id: "mg-2",
        title: "Petrol Global Economics Animated Reel",
        thumbnail: motionGraphicsImg,
        videoUrl: "https://res.cloudinary.com/dvwmxd3kr/video/upload/v1780339007/Petrol_Reel_acxkvo.mp4"
      },
      {
        id: "mg-3",
        title: "Popcorn Cinema Kinetic Typography Explainer",
        thumbnail: motionGraphicsImg,
        videoUrl: "https://res.cloudinary.com/dvwmxd3kr/video/upload/v1780338919/Popcron_ReelMF_uwsfzz.mp4"
      },
      {
        id: "mg-4",
        title: "Razorpay App Interface Micro-Animations",
        thumbnail: motionGraphicsImg,
        videoUrl: "https://res.cloudinary.com/dvwmxd3kr/video/upload/v1780338512/Razorpay_Reel_dzxtwt.mp4"
      },
      {
        id: "mg-5",
        title: "Minister Rajini Public Info-Graphics Display",
        thumbnail: motionGraphicsImg,
        videoUrl: "https://res.cloudinary.com/dvwmxd3kr/video/upload/v1780338459/Minister_Rajini_qj9mf0.mp4"
      },
      {
        id: "mg-6",
        title: "Artificial Intelligence Interface Simulation Reel",
        thumbnail: motionGraphicsImg,
        videoUrl: "https://res.cloudinary.com/dvwmxd3kr/video/upload/v1780338445/AI_Reel_d0rrac.mp4"
      }
    ]
  }
];
