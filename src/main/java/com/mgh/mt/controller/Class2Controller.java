package com.mgh.mt.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created with IntelliJ IDEA.
 * User: xvitcoder
 * Date: 12/21/12
 * Time: 12:23 AM
 */
@Controller
@RequestMapping("/class2")
public class Class2Controller {

    @RequestMapping("/layout")
    public String getClass2LayoutPage() {
        return "class2/layout";
    }
}
