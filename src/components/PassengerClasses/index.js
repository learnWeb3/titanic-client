import { Grid } from "@mui/material";
import { IndicatorPanel } from "../IndicatorPanel";
import { PieChart } from "../PieChart/index";
import { ColumnChart } from "../ColumnChart/index";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { BarChart } from "../BarChart/index";
import { HeaderPanel } from "../HeaderPanel/index";

export const PassengerClasses = ({}) => {
  const classes = useSelector((state) => state.classes.classes);
  const [passengerRepartitionByClass, setPassengerRepartitionByClass] =
    useState(null);

  const [deathNumberRepartitionByClass, setDeathNumberRepartitionByClass] =
    useState(null);

  const [deathRepartitionByGenderAndClasses, setDeathRepartitionByGenderAndClasses] = useState(null);

  const [
    survivedNumberRepartitionByClass,
    setSurvivedNumberRepartitionByClass,
  ] = useState(null);

  const [genderRepartitionByClass, setGenderRepartitionByClass] =
    useState(null);

  const [ageDistributionByClass, setAgeDistributionByClass] = useState(null);

  useEffect(() => {
    if (classes) {
      const passengerRepartitionByClassChart = () => {
        const data = classes.passengerRepartition;
        const labels = data.map(
          (element) => `Passenger class ${element.class}`
        );
        const series = data.map((element) => element.count);
        setPassengerRepartitionByClass({
          series: series,
          labels: labels,
        });
      };

      const deathNumberRepartitionByClassChart = () => {
        const data = classes.deathRepartition;
        const _labels = Object.keys(data);
        const labels = _labels.map((label) => `Passenger class ${label}`);
        const series = _labels.map(
          (label) => data[label].find((element) => !element.survived).count
        );
        setDeathNumberRepartitionByClass({
          series: series,
          labels: labels,
        });
      };

      const deathRepartitionByGenderAndClassesCharts = () =>{
          const data = classes.deathRepartitionByGenderAndClasses
          const charts = {
            male: [],
            female: []
          }
          Object.keys(data).map((gender)=>{
            const passengerClasses = Object.keys(data[gender]);
            charts[gender] = passengerClasses.map((passengerClass)=>({
              series: data[gender][passengerClass].map(({count})=>count),
              labels: data[gender][passengerClass].map(({survived}) => survived ? "survived" : "died"),
              title: `${gender} death repartition in passenger class ${passengerClass}`
            }))
          });
          setDeathRepartitionByGenderAndClasses(charts)
      }

      const survivedNumberRepartitionByClassChart = () => {
        const data = classes.deathRepartition;
        const _labels = Object.keys(data);
        const labels = _labels.map((label) => `Passenger class ${label}`);
        const series = _labels.map(
          (label) => data[label].find((element) => element.survived).count
        );
        setSurvivedNumberRepartitionByClass({
          series: series,
          labels: labels,
        });
      };

      const genderRepartitionByClassCharts = () => {
        const data = classes.genderRepartition;
        const _classes = Object.keys(data);
        const chartsData = _classes.map((_class) => ({
          title: `Gender in passenger class ${_class}`,
          labels: data[_class].map(({ sex }) => sex),
          series: data[_class].map(({ count }) => count),
        }));
        setGenderRepartitionByClass(chartsData);
      };

      const ageDistributionByClassAndSurvivalsCharts = () => {
        const data = classes.agesDistribution;

        const diedPassengersChartsData = Object.keys(data.died).map(
          (_class) => ({
            title: `Died passengers age distribution in class ${_class}`,
            xAxisCategories: data.died[_class].data.map(({ age }) => `${age}`),
            series: [
              {
                name: "passenger count",
                data: data.died[_class].data.map(({ count }) =>count),
              },
            ],
          })
        );

        const survivedPassengersChartsData = Object.keys(data.survived).map(
          (_class) => ({
            title: `Survived passengers age distribution in class ${_class}`,
            xAxisCategories: data.survived[_class].data.map(
              ({ age }) => `${age}`
            ),
            series: [
              {
                name: "passenger count",
                data: data.survived[_class].data.map(({ count }) =>count)
              }
            ],
          })
        );

        setAgeDistributionByClass({
          died: diedPassengersChartsData,
          survived: survivedPassengersChartsData,
        });
      };

      passengerRepartitionByClassChart();
      deathNumberRepartitionByClassChart();
      deathRepartitionByGenderAndClassesCharts();
      survivedNumberRepartitionByClassChart();
      genderRepartitionByClassCharts();
      ageDistributionByClassAndSurvivalsCharts();
    }
  }, [classes]);

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} lg={12}>
        <HeaderPanel title={"Passenger classes"} variant={"h3"} />
      </Grid>
      <Grid item xs={12} lg={6}>
        {passengerRepartitionByClass && (
          <IndicatorPanel
            component={PieChart}
            title={"Passenger by class"}
            labels={passengerRepartitionByClass.labels}
            series={passengerRepartitionByClass.series}
          />
        )}
      </Grid>
      <Grid item xs={12} lg={12}>
        <HeaderPanel title={"Deaths"} variant={"h4"} />
      </Grid>
      <Grid item xs={12} lg={6}>
        {deathNumberRepartitionByClass && (
          <IndicatorPanel
            component={PieChart}
            title={"Death number by class"}
            labels={deathNumberRepartitionByClass.labels}
            series={deathNumberRepartitionByClass.series}
          />
        )}
      </Grid>
      <Grid item xs={12} lg={6}>
        {survivedNumberRepartitionByClass && (
          <IndicatorPanel
            component={PieChart}
            title={"Survived number by class"}
            labels={survivedNumberRepartitionByClass.labels}
            series={survivedNumberRepartitionByClass.series}
          />
        )}
      </Grid>

      <Grid item xs={12} lg={12}>
        <HeaderPanel title={"Genders"} variant={"h4"} />
      </Grid>

      {genderRepartitionByClass &&
        genderRepartitionByClass.length &&
        genderRepartitionByClass.map(({ title, labels, series }, index) => (
          <Grid item xs={12} lg={6}>
            {passengerRepartitionByClass && (
              <IndicatorPanel
                key={index}
                component={PieChart}
                title={title}
                labels={labels}
                series={series}
              />
            )}
          </Grid>
        ))}


      <Grid item xs={12} lg={12}>
        <HeaderPanel title={"Deaths by genders and classes"} variant={"h4"} />
      </Grid>

      {deathRepartitionByGenderAndClasses && deathRepartitionByGenderAndClasses.male &&
        deathRepartitionByGenderAndClasses.male.map(({ title, labels, series }, index) => (
          <Grid item xs={12} lg={6}>
            {passengerRepartitionByClass && (
              <IndicatorPanel
                key={index}
                component={PieChart}
                title={title}
                labels={labels}
                series={series}
              />
            )}
          </Grid>
        ))}

{deathRepartitionByGenderAndClasses && deathRepartitionByGenderAndClasses.female &&
        deathRepartitionByGenderAndClasses.female.map(({ title, labels, series }, index) => (
          <Grid item xs={12} lg={6}>
            {passengerRepartitionByClass && (
              <IndicatorPanel
                key={index}
                component={PieChart}
                title={title}
                labels={labels}
                series={series}
              />
            )}
          </Grid>
        ))}


      <Grid item xs={12} lg={12}>
        <HeaderPanel title={"Ages"} variant={"h4"} />
      </Grid>

      {ageDistributionByClass &&
        ageDistributionByClass.died.length &&
        ageDistributionByClass.died.map(
          ({ title, xAxisCategories, series }, index) => (
            <Grid item xs={12} lg={6}>
              {passengerRepartitionByClass && (
                <IndicatorPanel
                  key={index}
                  component={BarChart}
                  title={title}
                  xAxisCategories={xAxisCategories}
                  series={series}
                />
              )}
            </Grid>
          )
        )}

      {ageDistributionByClass &&
        ageDistributionByClass.survived.length &&
        ageDistributionByClass.survived.map(
          ({ title, xAxisCategories, series }, index) => (
            <Grid item xs={12} lg={6}>
              {passengerRepartitionByClass && (
                <IndicatorPanel
                  key={index}
                  component={BarChart}
                  title={title}
                  xAxisCategories={xAxisCategories}
                  series={series}
                />
              )}
            </Grid>
          )
        )}
    </Grid>
  );
};
