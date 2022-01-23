// SPDX-License-Identifier: GEO
pragma solidity >=0.5.0;


interface ITANV1Factory {
    function getExchange(address) external view returns (address);
}
