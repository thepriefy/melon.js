#Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to
[Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## Unreleased

### Refactored

### Added

### Changed

* getFundInformations also returns owner

### Deprecated

### Fixed

## [0.3.5]

### Refactored

* Refactored /utils folder into subfolders: generic, ethereum and constants

### Added

* getWeb3 functionality
* onBlock function to query some status everyblock
* .eslintignore file instead of --ignore-path --> Ignores docs/
* Documentation.js build command: `npm run docs`
* Adding flow types & jsdocs to all library functions
* Retrieve all assets from Datafeed contract in getConfig
* Toggle Subscription and Toggle Redemption
* ConvertUnclaimedRewards
* shutDownFund

### Changed

* Renamed and refactored getNetworkName
* takeMultipleOrdersFromFund return value changed to remainingQuantity only
* Integrate protocol@0.3.8-alpha.5
* getFundById and getFundByManager
* Refactor getOrderbook
* Fix get recent trades / fund recent trades

### Deprecated

* awaitDataFeedUpdates
* depositAndApproveEther (needs more investigation)

### Fixed

* Fix #61
* Fix #60

## [0.3.2]

### Added

* getRecentTrades
* getFundRecentTrades

### Changed

* Integrate protocol@0.3.6-alpha.6
