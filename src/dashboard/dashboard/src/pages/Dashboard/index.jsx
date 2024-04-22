
  import React from "react";
import { Helmet } from 'react-helmet';
  import { Text, Img, Button } from "../../components"
import { MenuItem, Menu, Sidebar } from "react-pro-sidebar"

  
 const data = [{"dailyupdate":"images/img_rectangle.png","time":"14:23"},{"dailyupdate":"images/img_rectangle_64x64.png","time":"04:23"},{"dailyupdate":"images/img_rectangle_1.png","time":"16:30"},{"dailyupdate":"images/img_rectangle_2.png","time":"08:00"},{"dailyupdate":"images/img_rectangle_3.png","time":"18:15"},{"dailyupdate":"images/img_rectangle_4.png","time":"04:12"}]
  
  
  
  
  export default function DashboardPage(){

    const [collapsed, setCollapsed] = React.useState(false);

    //use this function to collapse/expand the sidebar
//function collapseSidebar() {
//    setCollapsed(!collapsed)
//}

    return (
      <>
        <Helmet>
          <title>User Dashboard - ChartChampions Access</title>
          <meta name="description" content="Explore your ChartChampions Dashboard with courses, video library, and journal. Start with linking your Discord and track your learning progress." />
        </Helmet> 
        

{/* dashboard layout section */}<div className="w-full bg-gray-900_01">


{/* main content section */}<div className="flex items-start md:flex-col">


{/* sidebar navigation section */}<Sidebar width="322px !important" collapsedWidth="80px !important" collapsed={collapsed} className="!sticky top-0 flex h-screen flex-col overflow-auto bg-gray-900 p-3 md:hidden md:p-5">


{/* logo section */}<Img src="images/img_header_logo.png" alt="headerlogo_one" className="mt-[11px] h-[25px] w-[57%] object-cover" />


{/* navigation menu section */}<Menu menuItemStyles={{ button: {
      "padding":"13px 13px 13px 31px","gap":"16px","alignSelf":"start","color":"#f5f5f5","fontWeight":400,"fontSize":"14px",
      [`&:hover, &.ps-active`]: {"color":"#ffffff","fontWeight":"500 !important","backgroundColor":"#433159 !important"},
    } }} rootStyles={{  ["&>ul"]: {"gap":"0.60px"} }} className="mt-[39px] flex w-full flex-col self-stretch">


{/* dashboard menu item section */}<MenuItem icon={<Img src="images/img_grid.svg" alt="grid_one" className="h-[24px] w-[24px]" />
}>
Dashboard</MenuItem>


{/* courses menu item section */}<MenuItem icon={<Img src="images/img_television.svg" alt="television_one" className="h-[24px] w-[24px]" />
}>
Courses</MenuItem>


{/* video library menu item section */}<MenuItem icon={<Img src="images/img_search.svg" alt="search_one" className="h-[24px] w-[24px]" />
}>
Video Library</MenuItem>


{/* journal menu item section */}<MenuItem icon={<Img src="images/img_user.svg" alt="user_one" className="h-[24px] w-[24px]" />
}>
Journal</MenuItem>
</Menu>
{!collapsed ? 

{/* user profile section */}<div className="mb-[1025px] mt-[941px] flex items-center gap-2.5 self-start p-[5px]">
<Text as="p" className="ml-[18px] flex h-[40px] w-[40px] items-center justify-center rounded-[20px] bg-gray-800 text-center !font-normal tracking-[0.32px]">
N</Text>
<div className="flex flex-col items-start gap-0.5">
<Text size="s" as="p" className="!font-medium tracking-[0.28px]">
Nihal Mutha</Text>
<Text size="xs" as="p" className="!text-gray-500">
View Profile</Text>
</div>
</div>
 : null}</Sidebar>


{/* header actions section */}<div className="flex flex-1 flex-col gap-2 md:self-stretch md:p-5">


{/* header buttons section */}<header className="flex items-center justify-end p-2.5">
<div className="my-1.5 flex w-[33%] items-center justify-end gap-4 md:w-full">
<div className="flex flex-1 justify-end gap-4">
<Button shape="round" className="w-full font-roboto sm:px-5">
Upgrade Now</Button>
<Button color="gray_700" shape="round" className="w-full font-roboto sm:px-5">
Discord Setup</Button>
</div>
<Text as="p" className="flex h-[40px] w-[40px] items-center justify-center rounded-[20px] bg-gray-800 text-center !font-normal tracking-[0.32px]">
N</Text>
</div>
</header>


{/* welcome section */}<div className="ml-4 flex w-[93%] flex-col gap-4 md:ml-0 md:w-full">
<Img src="images/img_rectangle_34.png" alt="image" className="h-[368px] rounded-lg object-cover" />
<div className="flex flex-col gap-[15px]">


{/* user progress section */}<div className="flex gap-4 md:flex-col">
<div className="flex w-full flex-col items-start justify-center gap-[63px] rounded-lg bg-gray-900 p-6 sm:gap-[31px] sm:p-5">
<div className="flex flex-col items-start gap-6 self-stretch">
<Text size="lg" as="p" className="!font-roboto">
Welcome</Text>
<Text as="p" className="!font-roboto leading-[144%]">
Neha Sri Tangirala, welcome to ChartChampions! there&#39;s a lot to explore here, so let&#39;s get started</Text>
</div>
<Button shape="round" className="min-w-[181px] sm:px-5">
Link your Discord</Button>
</div>


{/* progress details section */}<div className="flex w-full flex-col items-start justify-center gap-[26px] rounded-lg bg-gray-900 p-6 sm:p-5">
<div className="ml-2 mt-[5px] flex md:ml-0">
<Text size="lg" as="p" className="!font-roboto">
Your Progress</Text>
</div>
<div className="ml-2 flex w-[78%] items-center justify-between gap-5 md:ml-0 md:w-full">
<div className="flex w-[42%] flex-col items-center justify-center rounded-[73px] bg-deep_purple-100 px-14 py-[61px] md:p-5">
<Text as="p" className="tracking-[0.32px]">
0%</Text>
</div>
<div className="flex w-[47%] flex-col gap-[22px]">
<div className="flex items-center gap-2">
<div className="h-[16px] w-[16px] self-start rounded-lg bg-deep_purple-A400" />
<Text as="p" className="tracking-[0.32px]">
Module Progress</Text>
</div>
<div className="flex items-center gap-2">
<div className="h-[16px] w-[16px] self-start rounded-lg bg-deep_purple-100" />
<Text as="p" className="tracking-[0.32px]">
Modules to Study</Text>
</div>
</div>
</div>
</div>
</div>


{/* video library highlight section */}<div className="flex gap-4 md:flex-col">


{/* video library list section */}<div className="flex w-full flex-col gap-6 rounded-lg bg-gray-900 p-6 sm:p-5">
<div className="flex items-center justify-between gap-5">
<Text size="lg" as="p" className="self-end !font-roboto">
Video Library</Text>
<Button shape="round" className="min-w-[110px] sm:px-5">
View All</Button>
</div>
<div className="flex flex-col gap-2">
{[...Array(4)].map((d,index) => (<div key={"listaltcoinweek" + index} className="flex flex-1 items-center gap-4 sm:flex-col">
<Img src="images/img_rectangle_39.png" alt="image" className="h-[104px] w-[42%] object-cover sm:w-full" />
<div className="flex flex-col items-start gap-2">
<Text as="p" className="tracking-[0.32px]">
Altcoin Weekly Update</Text>
<Text size="s" as="p" className="tracking-[0.28px]">
Opened 5 hours ago - 30.Nov.2024</Text>
</div>
</div>
 ))}</div>
</div>


{/* daily updates section */}<div className="flex w-full flex-col gap-[26px] rounded-lg bg-gray-900 p-6 sm:p-5">
<div className="flex">
<Text size="lg" as="p" className="!font-roboto">
Video Library</Text>
</div>
<div className="mb-6 flex flex-col gap-2">
{data.map((d,index) => (<div key={"listdaily" + index} className="flex flex-1 items-center gap-4 sm:flex-col">
<Img src={d.dailyupdate} alt="daily_update" className="h-[64px] w-[64px] rounded-[50%]" />
<div className="flex flex-1 items-center justify-between gap-5 sm:self-stretch">
<div className="flex flex-col items-start gap-1.5">
<Text as="p" className="tracking-[0.32px]">
Daily Update</Text>
<Text size="s" as="p" className="tracking-[0.28px]">
01.Dec.2023</Text>
</div>
<Text as="p" className="tracking-[0.32px]">
{d.time}</Text>
</div>
</div>
 ))}</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

      </>
    )
  }
  