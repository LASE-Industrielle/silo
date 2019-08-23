import React from 'react';
import SvgIcon from 'react-native-svg-icon';
import { Path, G } from 'react-native-svg';
import { primary } from '../Colors';

const icon = {
  icon: {
    svg: (
      <G>
        <Path className="a"
              fill={"#fff"}
              d="M192.091,107.286a1.977,1.977,0,0,0,.109.2c.036.054.091.109.127.163a1.637,1.637,0,0,0,.181.163.611.611,0,0,0,.218.109.9.9,0,0,0,.236.073,1.115,1.115,0,0,0,.236.018,1.034,1.034,0,0,0,.236-.018.649.649,0,0,0,.2-.073h.018a1.352,1.352,0,0,0,.218-.127,1.174,1.174,0,0,0,.163-.145l.018-.018a1,1,0,0,0,.127-.163.567.567,0,0,0,.091-.181c0-.018,0-.018.018-.036a1.173,1.173,0,0,0,.073-.236,1.541,1.541,0,0,0,0-.471,1.684,1.684,0,0,0-.073-.236,1.029,1.029,0,0,0-.218-.326l-.036-.036a1.588,1.588,0,0,0-.181-.145c-.073-.036-.127-.073-.2-.109a1.022,1.022,0,0,0-.218-.073,1.115,1.115,0,0,0-.236-.018,1.034,1.034,0,0,0-.236.018,1.023,1.023,0,0,0-.218.073h-.018a1.979,1.979,0,0,0-.2.109,1.588,1.588,0,0,0-.181.145,1.172,1.172,0,0,0-.145.163,1.977,1.977,0,0,0-.109.2,1.02,1.02,0,0,0-.073.218,1.115,1.115,0,0,0-.018.236,1.034,1.034,0,0,0,.018.236A1.644,1.644,0,0,0,192.091,107.286Z"
              transform="translate(-181.134 -98.65)"/>
        <Path className="a"
              fill={"#fff"}
              d="M180.863,185.713h-.417v-4.441a.468.468,0,0,0-.471-.471h-1.9a.468.468,0,0,0-.471.471v.979a.468.468,0,0,0,.471.471h.381v3.009h-.381a.468.468,0,0,0-.471.471v.979a.468.468,0,0,0,.471.471h2.792a.468.468,0,0,0,.471-.471V186.2A.484.484,0,0,0,180.863,185.713Z"
              transform="translate(-167.387 -170.442)"/>
        <Path className="b"
              fill={"#fff"}
              opacity={0.918}
              d="M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Zm0,22.42A10.42,10.42,0,1,1,22.42,12,10.43,10.43,0,0,1,12,22.42Z"/>
      </G>
    ),
    viewBox: '0 0 24 24'
  }
};

const InfoIcon = props => <SvgIcon fill={'white'} height={24} width={24} name={'icon'} {...props}
                                   svgs={icon}>{props.children}</SvgIcon>;

export default InfoIcon;