import { Avatar } from "../../components/Avatar";
import { NavItemButton } from "../../components/NavItemButton";
import { BarChartSquare02 } from "../../icons/BarChartSquare02";
import { CheckDone01 } from "../../icons/CheckDone01";
import { HomeLine38 } from "../../icons/HomeLine38";
import { LayersThree011 } from "../../icons/LayersThree011";
import { LifeBuoy01 } from "../../icons/LifeBuoy01";
import { PieChart031 } from "../../icons/PieChart031";
import { Settings013 } from "../../icons/Settings013";
import { Users014 } from "../../icons/Users014";

export const SideNav = () => {
  return (
    <div className="content-10">
    <div className="navigation-wrapper">
      <div className="navigation-2">
        <NavItemButton
          current={false}
          icon={<HomeLine38 className="icon-instance-node-2" color="#667085" />}
          size="lg"
          stateProp="default"
        />
        <NavItemButton
          current
          icon={<BarChartSquare02 className="icon-instance-node-2" color="#344054" />}
          size="lg"
          stateProp="default"
        />
        <NavItemButton
          current={false}
          icon={<LayersThree011 className="icon-instance-node-2" color="#667085" />}
          size="lg"
          stateProp="default"
        />
        <NavItemButton
          current={false}
          icon={<CheckDone01 className="icon-instance-node-2" color="#667085" />}
          size="lg"
          stateProp="default"
        />
        <NavItemButton
          current={false}
          icon={<PieChart031 className="icon-instance-node-2" color="#667085" />}
          size="lg"
          stateProp="default"
        />
        <NavItemButton
          current={false}
          icon={<Users014 className="icon-instance-node-2" color="#667085" />}
          size="lg"
          stateProp="default"
        />
      </div>
    </div>
    <div className="footer">
      <div className="navigation-3">
        <NavItemButton
          current={false}
          icon={<LifeBuoy01 className="icon-instance-node-2" color="#667085" />}
          size="lg"
          stateProp="default"
        />
        <NavItemButton
          current={false}
          icon={<Settings013 className="icon-instance-node-2" color="#667085" />}
          size="lg"
          stateProp="default"
        />
      </div>
      <Avatar
        className="design-component-instance-node"
        placeholder={false}
        size="lg"
        stateProp="default"
        statusIcon="false"
        text={false}
      />
    </div>
  </div>
  )
}
