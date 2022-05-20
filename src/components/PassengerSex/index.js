import { PieChart } from "../PieChart/index";
import { Grid } from "@mui/material";
import { IndicatorPanel } from "../IndicatorPanel/index";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { BarChart } from "../BarChart/index";
import { HeaderPanel } from "../HeaderPanel/index";

export const PassengerSex = ({}) => {
  const sexes = useSelector((state) => state.sexes.sexes);
  const [passengerRepartitionBySex, setPassengerRepartitionBySex] =
    useState(null);
  const [ageDistributionBySex, setageDistributionBySex] = useState(null);

  const [deathRepartitionBySex, setDeathRepartitionBySex] = useState(null);

  useEffect(() => {
    if (sexes) {
      const passengerRepartitionBySexChart = () => {
        const data = sexes.passengerRepartition;
        const labels = data.map((element) => element.sex);
        const series = data.map((element) => element.count);
        setPassengerRepartitionBySex({
          series: series,
          labels: labels,
        });
      };

      const deathRepartitionBySexCharts = () => {
        const data = sexes.deathRepartition;
        const chartData = Object.keys(data).map((gender) => ({
          title: `${gender} survivals/deaths`,
          labels: data[gender].map(({ survived }) =>
            survived ? "survived" : "died"
          ),
          series: data[gender].map(({ count }) => count),
        }));
        setDeathRepartitionBySex(chartData);
      };

      const ageDistributionCharts = () => {
        const data = sexes.agesDistribution;
        const mappingKeyToData = {
          died: data.died,
          survived: data.survived,
        };
        const makeCharts = (key = "died") => {
          return Object.keys(mappingKeyToData[key]).map((sex) => {
            console.log({
              title: `${key} ${sex} age distribution`,
              xAxisCategories: mappingKeyToData[key][sex].data.map(
                ({ age }) => `${age}`
              ),
              series: [
                {
                  name: "passenger count",
                  data: mappingKeyToData[key][sex].data.map(
                    ({ count }) => count
                  ),
                },
              ],
            });
            return {
              title: `${key} ${sex} age distribution`,
              xAxisCategories: mappingKeyToData[key][sex].data.map(
                ({ age }) => `${age}`
              ),
              series: [
                {
                  name: "passenger count",
                  data: mappingKeyToData[key][sex].data.map(
                    ({ count }) => count
                  ),
                },
              ],
            };
          });
        };
        const charts = {
          died: makeCharts("died"),
          survived: makeCharts("survived"),
        };
        setageDistributionBySex(charts);
      };

      passengerRepartitionBySexChart();
      deathRepartitionBySexCharts();
      ageDistributionCharts();
    }
  }, [sexes]);

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} lg={12}>
        <HeaderPanel title={"Passenger sexes"} variant={"h3"} />
      </Grid>
      <Grid item xs={12} lg={6}>
        {passengerRepartitionBySex && (
          <IndicatorPanel
            component={PieChart}
            title={"Gender repartition"}
            labels={passengerRepartitionBySex.labels}
            series={passengerRepartitionBySex.series}
          />
        )}
      </Grid>

      <Grid item xs={12} lg={12}>
        <HeaderPanel title={"Death repartition by gender"} variant={"h4"} />
      </Grid>

      {deathRepartitionBySex &&
        deathRepartitionBySex.length &&
        deathRepartitionBySex.map(({ title, series, labels }) => (
          <Grid item xs={12} lg={6}>
            <IndicatorPanel
              component={PieChart}
              title={title}
              series={series}
              labels={labels}
            />
          </Grid>
        ))}

      <Grid item xs={12} lg={12}>
        <HeaderPanel
          title={"Died passengers age distribution by gender"}
          variant={"h4"}
        />
      </Grid>

      {ageDistributionBySex &&
        ageDistributionBySex.died &&
        ageDistributionBySex.died.map(({ title, series, xAxisCategories }) => (
          <Grid item xs={12} lg={6} key={title}>
            <IndicatorPanel
              component={BarChart}
              title={title}
              series={series}
              xAxisCategories={xAxisCategories}
            />
          </Grid>
        ))}

      <Grid item xs={12} lg={12}>
        <HeaderPanel
          title={"Surviving passengers age distribution by gender"}
          variant={"h4"}
        />
      </Grid>

      {ageDistributionBySex &&
        ageDistributionBySex.survived &&
        ageDistributionBySex.survived.map(
          ({ title, series, xAxisCategories }) => (
            <Grid item xs={12} lg={6} key={title}>
              <IndicatorPanel
                component={BarChart}
                title={title}
                series={series}
                xAxisCategories={xAxisCategories}
              />
            </Grid>
          )
        )}
    </Grid>
  );
};
