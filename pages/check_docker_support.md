

##### Checking Docker Support

In order to run docker you must be able to support virtualization from your CPU. This feature must also be enabled within your BIOS and Windows Features. See [Troubleshooting]({{site.baseurl}}{% link pages/troubleshooting.md %}) for more details

If you're unsure whether docker is supported by your specific cpu, please visit:
- [Intel](https://ark.intel.com/content/www/us/en/ark.html)
- [AMD](https://www.amd.com/en/products/cpu)

and input your specific model number.


<details>
<summary>View Example</summary>

Type Your Model Number, e.g. T6500 into the product search bar
![CheckingSites]({{site.baseurl}}/assets/img/intel_product_example_annotated.png "Title")
In this example above, you can see that Vt-x (Virtualization) is not supported. This will be a **Yes** if it is supported.

</details>

