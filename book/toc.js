// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="01_introduction.html"><strong aria-hidden="true">1.</strong> Introduction</a></li><li class="chapter-item expanded "><a href="getting_started/index.html"><strong aria-hidden="true">2.</strong> Getting Started</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="getting_started/leptos_dx.html"><strong aria-hidden="true">2.1.</strong> Leptos DX</a></li><li class="chapter-item expanded "><a href="getting_started/community_crates.html"><strong aria-hidden="true">2.2.</strong> The Leptos Community and leptos-* Crates</a></li></ol></li><li class="chapter-item expanded "><a href="view/index.html"><strong aria-hidden="true">3.</strong> Part 1: Building User Interfaces</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="view/01_basic_component.html"><strong aria-hidden="true">3.1.</strong> A Basic Component</a></li><li class="chapter-item expanded "><a href="view/02_dynamic_attributes.html"><strong aria-hidden="true">3.2.</strong> Dynamic Attributes</a></li><li class="chapter-item expanded "><a href="view/03_components.html"><strong aria-hidden="true">3.3.</strong> Components and Props</a></li><li class="chapter-item expanded "><a href="view/04_iteration.html"><strong aria-hidden="true">3.4.</strong> Iteration</a></li><li class="chapter-item expanded "><a href="view/04b_iteration.html"><strong aria-hidden="true">3.5.</strong> Iterating over More Complex Data</a></li><li class="chapter-item expanded "><a href="view/05_forms.html"><strong aria-hidden="true">3.6.</strong> Forms and Inputs</a></li><li class="chapter-item expanded "><a href="view/06_control_flow.html"><strong aria-hidden="true">3.7.</strong> Control Flow</a></li><li class="chapter-item expanded "><a href="view/07_errors.html"><strong aria-hidden="true">3.8.</strong> Error Handling</a></li><li class="chapter-item expanded "><a href="view/08_parent_child.html"><strong aria-hidden="true">3.9.</strong> Parent-Child Communication</a></li><li class="chapter-item expanded "><a href="view/09_component_children.html"><strong aria-hidden="true">3.10.</strong> Passing Children to Components</a></li><li class="chapter-item expanded "><a href="view/builder.html"><strong aria-hidden="true">3.11.</strong> No Macros: The View Builder Syntax</a></li></ol></li><li class="chapter-item expanded "><a href="reactivity/index.html"><strong aria-hidden="true">4.</strong> Reactivity</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="reactivity/working_with_signals.html"><strong aria-hidden="true">4.1.</strong> Working with Signals</a></li><li class="chapter-item expanded "><a href="reactivity/14_create_effect.html"><strong aria-hidden="true">4.2.</strong> Responding to Changes with Effects</a></li><li class="chapter-item expanded "><a href="reactivity/interlude_functions.html"><strong aria-hidden="true">4.3.</strong> Interlude: Reactivity and Functions</a></li></ol></li><li class="chapter-item expanded "><a href="testing.html"><strong aria-hidden="true">5.</strong> Testing</a></li><li class="chapter-item expanded "><a href="async/index.html"><strong aria-hidden="true">6.</strong> Async</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="async/10_resources.html"><strong aria-hidden="true">6.1.</strong> Loading Data with Resources</a></li><li class="chapter-item expanded "><a href="async/11_suspense.html"><strong aria-hidden="true">6.2.</strong> Suspense</a></li><li class="chapter-item expanded "><a href="async/12_transition.html"><strong aria-hidden="true">6.3.</strong> Transition</a></li><li class="chapter-item expanded "><a href="async/13_actions.html"><strong aria-hidden="true">6.4.</strong> Actions</a></li></ol></li><li class="chapter-item expanded "><a href="interlude_projecting_children.html"><strong aria-hidden="true">7.</strong> Interlude: Projecting Children</a></li><li class="chapter-item expanded "><a href="15_global_state.html"><strong aria-hidden="true">8.</strong> Global State Management</a></li><li class="chapter-item expanded "><a href="router/index.html"><strong aria-hidden="true">9.</strong> Router</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="router/16_routes.html"><strong aria-hidden="true">9.1.</strong> Defining &lt;Routes/&gt;</a></li><li class="chapter-item expanded "><a href="router/17_nested_routing.html"><strong aria-hidden="true">9.2.</strong> Nested Routing</a></li><li class="chapter-item expanded "><a href="router/18_params_and_queries.html"><strong aria-hidden="true">9.3.</strong> Params and Queries</a></li><li class="chapter-item expanded "><a href="router/19_a.html"><strong aria-hidden="true">9.4.</strong> &lt;A/&gt;</a></li><li class="chapter-item expanded "><a href="router/20_form.html"><strong aria-hidden="true">9.5.</strong> &lt;Form/&gt;</a></li></ol></li><li class="chapter-item expanded "><a href="interlude_styling.html"><strong aria-hidden="true">10.</strong> Interlude: Styling</a></li><li class="chapter-item expanded "><a href="metadata.html"><strong aria-hidden="true">11.</strong> Metadata</a></li><li class="chapter-item expanded "><a href="web_sys.html"><strong aria-hidden="true">12.</strong> Integrating with JavaScript: wasm-bindgen, web_sys, and HtmlElement</a></li><li class="chapter-item expanded "><a href="csr_wrapping_up.html"><strong aria-hidden="true">13.</strong> Client-Side Rendering: Wrapping Up</a></li><li class="chapter-item expanded "><a href="ssr/index.html"><strong aria-hidden="true">14.</strong> Part 2: Server Side Rendering</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="ssr/21_cargo_leptos.html"><strong aria-hidden="true">14.1.</strong> cargo-leptos</a></li><li class="chapter-item expanded "><a href="ssr/22_life_cycle.html"><strong aria-hidden="true">14.2.</strong> The Life of a Page Load</a></li><li class="chapter-item expanded "><a href="ssr/23_ssr_modes.html"><strong aria-hidden="true">14.3.</strong> Async Rendering and SSR “Modes”</a></li><li class="chapter-item expanded "><a href="ssr/24_hydration_bugs.html"><strong aria-hidden="true">14.4.</strong> Hydration Bugs</a></li></ol></li><li class="chapter-item expanded "><a href="server/index.html"><strong aria-hidden="true">15.</strong> Working with the Server</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="server/25_server_functions.html"><strong aria-hidden="true">15.1.</strong> Server Functions</a></li><li class="chapter-item expanded "><a href="server/26_extractors.html"><strong aria-hidden="true">15.2.</strong> Extractors</a></li><li class="chapter-item expanded "><a href="server/27_response.html"><strong aria-hidden="true">15.3.</strong> Responses and Redirects</a></li></ol></li><li class="chapter-item expanded "><a href="progressive_enhancement/index.html"><strong aria-hidden="true">16.</strong> Progressive Enhancement and Graceful Degradation</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="progressive_enhancement/action_form.html"><strong aria-hidden="true">16.1.</strong> &lt;ActionForm/&gt;s</a></li></ol></li><li class="chapter-item expanded "><a href="deployment/index.html"><strong aria-hidden="true">17.</strong> Deployment</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="deployment/csr.html"><strong aria-hidden="true">17.1.</strong> Deploying CSR Apps</a></li><li class="chapter-item expanded "><a href="deployment/ssr.html"><strong aria-hidden="true">17.2.</strong> Deploying SSR Apps</a></li><li class="chapter-item expanded "><a href="deployment/binary_size.html"><strong aria-hidden="true">17.3.</strong> Optimizing WASM Binary Size</a></li></ol></li><li class="chapter-item expanded "><a href="islands.html"><strong aria-hidden="true">18.</strong> Guide: Islands</a></li><li class="chapter-item expanded "><a href="appendix_reactive_graph.html"><strong aria-hidden="true">19.</strong> Appendix: How Does the Reactive System Work?</a></li><li class="chapter-item expanded "><a href="appendix_life_cycle.html"><strong aria-hidden="true">20.</strong> Appendix: The Life Cycle of a Signal</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
