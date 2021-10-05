# Boundless Exchange

Boundless is an automated market maker (“**AMM**”) that allows two tokens to be exchanged on the Nervos's [Godwoken](https://github.com/nervosnetwork/godwoken) [Polyjuice](https://github.com/nervosnetwork/godwoken-polyjuice). It is fast, cheap, and allows anyone to participate.

This repo is responsible for the **exchange** interface of the AMM.

Along with a normal DEX, Boundless also features arbitrage bots as a service.

## Development

The following assumes the use of `node@>=14`.

### Install Dependencies

```sh
yarn install
```

### Start local server

```sh
yarn start
```

## Deployment

### Build static files

```sh
yarn build
```

---

forked from [YokaiSwap/yokaiswap-interface](https://github.com/YokaiSwap/yokaiswap-interface)
