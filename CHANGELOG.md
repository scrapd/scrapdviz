# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [[1.0.0]] - 2019-10-06

### Added

- Add automation to incorporate security fixes automatically. [#164]
- Add home page. [#149]
- Add support for Google Tag. [#167]

## [[0.4.0]] - 2019-07-10

### Added

- Add an icon and a specific color to a marker, based on the type of crash. [#135]
- Add generic markers for fatalities without a type. [#137]

### Changed

- Adjust the sizes and the colors of the clusters based on the number of crashes they represent. [#134]
- Rename the date and time columns as they were confusing for the users. [#139]
- Clarifies the warning message mentioning that there is no data to show
for the selected dates. [#140]

### Fixed

- Markers with invalid coordinates prevent the map to render. [#138]

## [[0.3.0]] - 2019-06-13

### Added

- Add buttons to download the data set in `JSON` or `CSV`. [#103]
- Add a new view for visualizing the archive data. [#104]
- Add a graph showing the fatality distribution based on the year. [#105]
- Add a graph showing the fatality distribution based on the transportation mode. [#107]
- Add a graph showing the fatality distribution based on the crash cause. [#108]
- Add a warning message if there is no data within the selected dates.

### Fixed

- The counter shows crashes, no fatalities. [#106]

## [[0.2.4]] - 2019-05-08

### Added

- Add a graph showing the fatality distribution based on the time of the day [#93]
- Add a graph showing the fatality distribution based on the day of the week [#92]
- Add a graph showing the fatality distribution based on the month of the year [#91]

### Changed

- Redefine the age groups in the age distribution graph to make them more meaningful. [#89]
- Improve presets in the date picker. [#90]

## [[0.2.3]] - 2019-04-28

This is the first complete release of ScrAPDviz.

[//]: # (Release links)
[0.2.3]: https://github.com/scrapd/scrapdviz/releases/tag/0.2.3
[0.2.4]: https://github.com/scrapd/scrapdviz/releases/tag/0.2.4
[0.3.0]: https://github.com/scrapd/scrapdviz/releases/tag/0.3.0
[0.4.0]: https://github.com/scrapd/scrapdviz/releases/tag/0.4.0

[//]: # (PR links)
[#89]: https://github.com/scrapd/scrapdviz/pull/89
[#90]: https://github.com/scrapd/scrapdviz/pull/90
[#91]: https://github.com/scrapd/scrapdviz/pull/91
[#92]: https://github.com/scrapd/scrapdviz/pull/92
[#93]: https://github.com/scrapd/scrapdviz/pull/93
[#103]: https://github.com/scrapd/scrapdviz/pull/103
[#104]: https://github.com/scrapd/scrapdviz/pull/104
[#105]: https://github.com/scrapd/scrapdviz/pull/105
[#106]: https://github.com/scrapd/scrapdviz/pull/106
[#107]: https://github.com/scrapd/scrapdviz/pull/107
[#108]: https://github.com/scrapd/scrapdviz/pull/108
[#134]: https://github.com/scrapd/scrapdviz/pull/134
[#135]: https://github.com/scrapd/scrapdviz/pull/135
[#137]: https://github.com/scrapd/scrapdviz/pull/137
[#138]: https://github.com/scrapd/scrapdviz/pull/138
[#139]: https://github.com/scrapd/scrapdviz/pull/139
[#140]: https://github.com/scrapd/scrapdviz/pull/140
[#149]: https://github.com/scrapd/scrapdviz/pull/149
[#164]: https://github.com/scrapd/scrapdviz/pull/164
[#167]: https://github.com/scrapd/scrapdviz/pull/167
