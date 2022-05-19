import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { IndicatorPanel } from "../IndicatorPanel/index";
import { BarChart } from "../BarChart/index";
import { HeaderPanel } from "../HeaderPanel/index";

export const PassengerAge = ({}) => {
  const ages = useSelector((state) => state.ages.ages);
  const [ageDistributionData, setAgeDistributionData] = useState(null);
  const [ageDistributionDataSurvived, setAgeDistributionDataSurvived] =
    useState(null);
  const [ageDistributionDataDied, setAgeDistributionDataDied] = useState(null);

  useEffect(() => {
    if (ages) {
      const ageDistributionDataChart = (key = "all") => {
        const mappingKeyToProperty = {
          all: {
            property: ages.ageDistribution,
            set: setAgeDistributionData,
          },
          survived: {
            property: ages.ageDistributionSurvived,
            set: setAgeDistributionDataSurvived,
          },
          died: {
            property: ages.ageDistributionDied,
            set: setAgeDistributionDataDied,
          },
        };
        const dataPoints = mappingKeyToProperty[key].property.data.map(
          ({ count, age }) => ({
            x: age,
            y: count,
          })
        );
        const labels = ages.ageDistribution.data.map(({ age }) => `${age}`);
        mappingKeyToProperty[key].set({
          xAxisCategories: [...labels],
          series: [
            {
              name: "passenger count",
              data: [...dataPoints],
            },
            {
              name: 'mean',
              data: [
                {
                  x: mappingKeyToProperty[key].property.mean,
                  y: mappingKeyToProperty[key].property.maxCount,
                  fillColor: '#DC143C',
                  strokeColor: '#C23829'
                }
              ]
            }
          ],
        });
      };
      ageDistributionDataChart("all");
      ageDistributionDataChart("survived");
      ageDistributionDataChart("died");
    }
  }, [ages]);

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} lg={12}>
        <HeaderPanel title={"Passenger Ages"} variant={"h3"} />
      </Grid>
      <Grid item xs={12} lg={12}>
        {ageDistributionData && (
          <IndicatorPanel
            title={"Passengers age distribution"}
            component={BarChart}
            xAxisCategories={ageDistributionData.xAxisCategories}
            series={ageDistributionData.series}
          />
        )}
      </Grid>
      <Grid item xs={12} lg={12}>
        {ageDistributionDataSurvived && (
          <IndicatorPanel
            title={"Surviving passengers age distribution"}
            component={BarChart}
            xAxisCategories={ageDistributionDataSurvived.xAxisCategories}
            series={ageDistributionDataSurvived.series}
          />
        )}
      </Grid>
      <Grid item xs={12} lg={12}>
        {ageDistributionData && (
          <IndicatorPanel
            title={"Died passengers age distribution"}
            component={BarChart}
            xAxisCategories={ageDistributionDataDied.xAxisCategories}
            series={ageDistributionDataDied.series}
          />
        )}
      </Grid>
    </Grid>
  );
};
