import { PanelPlugin } from '@grafana/data';
import { CanvasOptions } from './types';
import { PerformanceCurvePanel } from './PerformanceCurvePanel';
import { CurveLineForms } from './CurveLineForms';
import { PlotSeriesForms } from './PlotSeriesForms';
import { getColorFromHexRgbOrName } from '@grafana/data';

export const plugin = new PanelPlugin<CanvasOptions>(PerformanceCurvePanel).setPanelOptions(builder => {
  return builder
    .addTextInput({
      category: ['Canvas Setting', 'Axis'],
      path: 'xLabel',
      name: 'xAxis Label',
      defaultValue: 'Flowrate',
    })
    .addNumberInput({
      category: ['Canvas Setting', 'Axis'],
      path: 'xMax',
      name: 'xAxis Max Value',
      defaultValue: 1600,
    })
    .addTextInput({
      category: ['Canvas Setting', 'Axis'],
      path: 'yLabel',
      name: 'yAxis Label',
      defaultValue: 'Pressure',
    })
    .addNumberInput({
      category: ['Canvas Setting', 'Axis'],
      path: 'yMax',
      name: 'yAxis Max Value',
      defaultValue: 4000,
    })
    .addColorPicker({
      category: ['Canvas Setting', 'Performance Curve'],
      path: 'curveColor',
      name: 'Performance Curve Color',
      defaultValue: getColorFromHexRgbOrName('rgba(136, 136, 136, 0.6)'),
      settings: {
        allowUndefined: true,
        disableNamedColors: true,
        textWhenUndefined: 'Not defined',
      },
    })
    .addCustomEditor({
      category: ['Canvas Setting', 'Performance Curve'],
      id: 'performanceCurveData',
      path: 'performanceCurveData',
      name: 'Performance Curve Data',
      description: 'Input sample data points of peformance curve . Program automatically draw smooth lines.',
      defaultValue: [
        {
          performCurveX: '200,400,600,800,1000,1200,1400',
          performCurveY: '4000,3900,3600,3100,2400,1500,400',
        },
      ],
      editor: CurveLineForms,
    })
    .addCustomEditor({
      category: ['Plot Setting'],
      id: 'plotSetting',
      path: 'plotSetting',
      name: 'Plot Setting',
      description: 'Set field names of X and Y axis to plot operation points. Set alias in query to set field name.',
      defaultValue: [
        {
          xSeries: 'Field X',
          ySeries: 'Field Y',
          color: getColorFromHexRgbOrName('rgba(136, 136, 136, 0.6)'),
        },
      ],
      editor: PlotSeriesForms,
    })
    .addSelect({
      category: ['Plot Setting'],
      path: 'pointRadius',
      name: 'Point Radius',
      defaultValue: 2,
      settings: {
        options: [
          {
            label: '0.5',
            value: 0.5,
          },
          {
            label: '1',
            value: 1,
          },
          {
            label: '2',
            value: 2,
          },
          {
            label: '3',
            value: 3,
          },
          {
            label: '4',
            value: 4,
          },
          {
            label: '5',
            value: 5,
          },
          {
            label: '6',
            value: 6,
          },
          {
            label: '7',
            value: 7,
          },
          {
            label: '8',
            value: 8,
          },
          {
            label: '9',
            value: 9,
          },
          {
            label: '10',
            value: 10,
          },
        ],
      },
    });
});
