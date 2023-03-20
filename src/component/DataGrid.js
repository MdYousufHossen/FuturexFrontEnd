import { Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { Fragment } from 'react';
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import FeaturesChart from './FeaturesChart';
import GridHeader from './GridHeader';
import GridRow from './GridRow';
import GrindSubHeader from './GridSubHeader';
import ScenariosChart from './ScenariosChart';
import StepsChart from './StepsChart';
import SummaryRow from './SummaryRow';

const DataGrid = () => {
  const classes = useStyles();
  const data=[
    {
      name:"demo/callarray/call-json",
      steps:{"passed":52,"failed":0,"skipped":0,"undefined":0,"pending":0,"total":52},
      scenarios:{"passed":1,"failed":0,"total":1},
      features:{"duration":"1s 539ms","status":"passed"},
    },
    {
      name:"demo/calldynamic/call-dynamic-json",
      steps:{"passed":66,"failed":0,"skipped":0,"undefined":0,"pending":0,"total":66},
      scenarios:{"passed":0,"failed":1,"total":1},
      features:{"duration":"1s 339ms","status":"passed"},
    },
    {
      name:"demo/calldynamic/call-dynamic-json",
      steps:{"passed":27,"failed":0,"skipped":0,"undefined":0,"pending":0,"total":27},
      scenarios:{"passed":1,"failed":0,"total":1},
      features:{"duration":"1s 339ms","status":"passed"},
    },
    {
      name:"demo/callarray/call-json",
      steps:{"passed":16,"failed":0,"skipped":5,"undefined":0,"pending":0,"total":21},
      scenarios:{"passed":0,"failed":1,"total":1},
      features:{"duration":"1s 48ms","status":"failed"},
    },
    {
      name:"demo/callarray/call-json",
      steps:{"passed":0,"failed":5,"skipped":0,"undefined":0,"pending":0,"total":5},
      scenarios:{"passed":1,"failed":0,"total":1},
      features:{"duration":"1s 408ms","status":"passed"},
    }
  ]
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' +"</span>";
    },
  };
    return (
        <Fragment>
            <Swiper
        pagination={pagination}
        modules={[Pagination,Navigation]}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide>
        <Typography className={classes.pieTitle}>Steps</Typography>
        <StepsChart tableData={data}/>
       </SwiperSlide>
        <SwiperSlide>
          <Typography className={classes.pieTitle}>Scenarios</Typography>
          
          <ScenariosChart tableData={data}/>
       </SwiperSlide>
        <SwiperSlide>
          <Typography className={classes.pieTitle}>Features</Typography>
          <FeaturesChart tableData={data}/>
          
       </SwiperSlide>
       
      
        
      </Swiper>
          
          <div>
         <Grid className={classes.borderLine} container>
        <GridHeader/>
        <GrindSubHeader/>
       {
          data.map((item,index)=>{
            return <GridRow key={index} data={item}/>
          })
       }
        <SummaryRow data={data}/>
          </Grid>
        </div>
        </Fragment>
    );
};
const useStyles =makeStyles({
  borderLine:{
    border:"1px solid black !important",
    textAlign:"center"
  },
  text:{
    fontWeight:"bold !important",
    fontSize:"14px !important"
},
pieTitle:{
  fontWeight:"bold !important",
  fontSize:"16px !important",
  textAlign:"center"
}
})

export default DataGrid;