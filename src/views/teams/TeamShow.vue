<template>
  <div class="team-show">
    <body>
      <div class="py-4">
        <div class="container">
          <div class="row">
            <!-- Main Content -->
            <main class="col col-xl-9 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12 ml-auto">
              <div class="box shadow-sm border rounded bg-white mb-3">
                <div class="box-title border-bottom p-3">
                  <h6 class="m-0">About Us</h6>
                </div>
                <div class="box-body p-3">
                  <p>{{ team.about }}</p>
                </div>
              </div>
              <div class="box shadow-sm border rounded bg-white mb-3 osahan-share-post">
                <div class="tab-content" id="myTabContent">
                  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <div class="p-3 border-top">
                      <div class="row">
                        <div v-for="membership in team.memberships" v-bind:key="membership" class="col-md-6">
                          <router-link v-bind:to="`/users/${membership.user.id}`">
                            <div class="border job-item mb-3">
                              <div class="d-flex align-items-center p-3 job-item-header">
                                <div class="overflow-hidden mr-2">
                                  <h6 class="font-weight-bold text-dark mb-0 text-truncate">
                                    {{ membership.user.summoner_name }}
                                  </h6>
                                  <p>{{ membership.primary_role }}</p>
                                  <div class="text-truncate text-primary">
                                    Secondary:{{ membership.secondary_role }}
                                  </div>
                                  <div v-if="membership.user.rank_data.length > 0" class="small text-gray-500">
                                    <div v-for="rank in membership.user.rank_data" v-bind:key="rank.queueType">
                                      <div v-if="rank.queueType == 'RANKED_FLEX_SR'">
                                        <p>Ranked Flex</p>
                                      </div>
                                      <div v-if="rank.queueType == 'RANKED_SOLO_5x5'">
                                        <p>Solo/Duo</p>
                                      </div>
                                      {{ rank.tier }}, {{ rank.rank }}
                                    </div>
                                  </div>
                                </div>
                                <img
                                  class="/img-fluid ml-auto"
                                  :src="`/img/profileicon/${membership.user.summoner_info.profileIconId}.png`"
                                  style="width: 150px"
                                  alt=""
                                />
                              </div>
                            </div>
                          </router-link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    <div class="p-3 w-100">
                      <div class="row">
                        <div class="col-md-6">
                          <div class="border shadow-sm border rounded bg-white job-item-2 p-3 mb-3">
                            <div class="media">
                              <div class="u-avatar mr-3">
                                <img class="/img-fluid" src="/img/l3.png" alt="Image Description" />
                              </div>
                              <div class="media-body">
                                <div class="mb-3">
                                  <h6 class="font-weight-bold mb-0">
                                    <a class="text-dark" href="job-profile.html">C# Developer</a>
                                  </h6>
                                  <a class="d-inline-block small pt-1" href="job-profile.html">
                                    <span class="text-warning">
                                      <span class="feather-star"></span>
                                      <span class="feather-star"></span>
                                      <span class="feather-star"></span>
                                      <span class="feather-star text-gray-500"></span>
                                      <span class="feather-star text-gray-500"></span>
                                    </span>
                                    <span class="text-dark font-weight-bold ml-2">3.74</span>
                                    <span class="text-muted">(567 reviews)</span>
                                  </a>
                                </div>
                                <div class="d-flex align-items-center">
                                  <div class="border-right pr-3 mr-3">
                                    <a class="text-secondary small" href="job-profile.html">Salaries</a>
                                  </div>
                                  <a class="small" href="job-profile.html">Open jobs</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="border shadow-sm border rounded bg-white job-item-2 p-3 mb-3">
                            <div class="media">
                              <div class="u-avatar mr-3">
                                <img class="/img-fluid" src="/img/l2.png" alt="Image Description" />
                              </div>
                              <div class="media-body">
                                <div class="mb-3">
                                  <h6 class="font-weight-bold mb-0">
                                    <a class="text-dark" href="job-profile.html">Junior UX Designer</a>
                                  </h6>
                                  <a class="d-inline-block small pt-1" href="job-profile.html">
                                    <span class="text-warning">
                                      <span class="feather-star"></span>
                                      <span class="feather-star"></span>
                                      <span class="feather-star"></span>
                                      <span class="feather-star"></span>
                                      <span class="feather-star"></span>
                                    </span>
                                    <span class="text-dark font-weight-bold ml-2">3.74</span>
                                    <span class="text-muted">(567 reviews)</span>
                                  </a>
                                </div>
                                <div class="d-flex align-items-center">
                                  <div class="border-right pr-3 mr-3">
                                    <a class="text-secondary small" href="job-profile.html">Salaries</a>
                                  </div>
                                  <a class="small" href="job-profile.html">Open jobs</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="border shadow-sm border rounded bg-white job-item-2 p-3 mb-3">
                            <div class="media">
                              <div class="u-avatar mr-3">
                                <img class="/img-fluid" src="/img/l3.png" alt="Image Description" />
                              </div>
                              <div class="media-body">
                                <div class="mb-3">
                                  <h6 class="font-weight-bold mb-0">
                                    <a class="text-dark" href="job-profile.html">Junior UX Designer</a>
                                  </h6>
                                  <a class="d-inline-block small pt-1" href="job-profile.html">
                                    <span class="text-warning">
                                      <span class="feather-star"></span>
                                      <span class="feather-star"></span>
                                      <span class="feather-star"></span>
                                      <span class="feather-star"></span>
                                      <span class="feather-star"></span>
                                    </span>
                                    <span class="text-dark font-weight-bold ml-2">3.74</span>
                                    <span class="text-muted">(567 reviews)</span>
                                  </a>
                                </div>
                                <div class="d-flex align-items-center">
                                  <div class="border-right pr-3 mr-3">
                                    <a class="text-secondary small" href="job-profile.html">Salaries</a>
                                  </div>
                                  <a class="small" href="job-profile.html">Open jobs</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="border shadow-sm border rounded bg-white job-item-2 p-3 mb-3">
                            <div class="media">
                              <div class="u-avatar mr-3">
                                <img class="/img-fluid" src="/img/l4.png" alt="Image Description" />
                              </div>
                              <div class="media-body">
                                <div class="mb-3">
                                  <h6 class="font-weight-bold mb-0">
                                    <a class="text-dark" href="job-profile.html">Junior UX Designer</a>
                                  </h6>
                                  <a class="d-inline-block small pt-1" href="job-profile.html">
                                    <span class="text-warning">
                                      <span class="feather-star"></span>
                                      <span class="feather-star"></span>
                                      <span class="feather-star"></span>
                                      <span class="feather-star"></span>
                                      <span class="feather-star"></span>
                                    </span>
                                    <span class="text-dark font-weight-bold ml-2">3.74</span>
                                    <span class="text-muted">(567 reviews)</span>
                                  </a>
                                </div>
                                <div class="d-flex align-items-center">
                                  <div class="border-right pr-3 mr-3">
                                    <a class="text-secondary small" href="job-profile.html">Salaries</a>
                                  </div>
                                  <a class="small" href="job-profile.html">Open jobs</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="border shadow-sm border rounded bg-white job-item-2 p-3 mb-3">
                            <div class="media">
                              <div class="u-avatar mr-3">
                                <img class="/img-fluid" src="/img/l5.png" alt="Image Description" />
                              </div>
                              <div class="media-body">
                                <div class="mb-3">
                                  <h6 class="font-weight-bold mb-0">
                                    <a class="text-dark" href="job-profile.html">Junior UX Designer</a>
                                  </h6>
                                  <a class="d-inline-block small pt-1" href="job-profile.html">
                                    <span class="text-warning">
                                      <span class="feather-star"></span>
                                      <span class="feather-star"></span>
                                      <span class="feather-star"></span>
                                      <span class="feather-star"></span>
                                      <span class="feather-star"></span>
                                    </span>
                                    <span class="text-dark font-weight-bold ml-2">3.74</span>
                                    <span class="text-muted">(567 reviews)</span>
                                  </a>
                                </div>
                                <div class="d-flex align-items-center">
                                  <div class="border-right pr-3 mr-3">
                                    <a class="text-secondary small" href="job-profile.html">Salaries</a>
                                  </div>
                                  <a class="small" href="job-profile.html">Open jobs</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="border shadow-sm border rounded bg-white job-item-2 p-3 mb-3">
                            <div class="media">
                              <div class="u-avatar mr-3">
                                <img class="/img-fluid" src="/img/l6.png" alt="Image Description" />
                              </div>
                              <div class="media-body">
                                <div class="mb-3">
                                  <h6 class="font-weight-bold mb-0">
                                    <a class="text-dark" href="job-profile.html">Junior UX Designer</a>
                                  </h6>
                                  <a class="d-inline-block small pt-1" href="job-profile.html">
                                    <span class="text-warning">
                                      <span class="feather-star"></span>
                                      <span class="feather-star"></span>
                                      <span class="feather-star"></span>
                                      <span class="feather-star"></span>
                                      <span class="feather-star"></span>
                                    </span>
                                    <span class="text-dark font-weight-bold ml-2">3.74</span>
                                    <span class="text-muted">(567 reviews)</span>
                                  </a>
                                </div>
                                <div class="d-flex align-items-center">
                                  <div class="border-right pr-3 mr-3">
                                    <a class="text-secondary small" href="job-profile.html">Salaries</a>
                                  </div>
                                  <a class="small" href="job-profile.html">Open jobs</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                    <div class="p-3 w-100">
                      <div class="row">
                        <div class="col-md-6">
                          <div class="card overflow-hidden">
                            <iframe
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501889.172354371!2d73.15671299623955!3d31.003573085499198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391964aa569e7355%3A0x8fbd263103a38861!2sPunjab!5e0!3m2!1sen!2sin!4v1575738201305!5m2!1sen!2sin"
                              width="100%"
                              height="150"
                              frameborder="0"
                              style="border: 0"
                              allowfullscreen=""
                            ></iframe>
                            <div class="card-body">
                              <h6 class="card-title">Postal Address</h6>
                              <p class="card-text">PO Box 16122 Collins Street West Victoria 8007 Australia</p>
                              <a href="#" class="text-link font-weight-bold">
                                <i class="feather-external-link"></i>
                                Get Directions
                              </a>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="card overflow-hidden">
                            <iframe
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109552.19658166621!2d75.78663235513761!3d30.900473637624447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a837462345a7d%3A0x681102348ec60610!2sLudhiana%2C%20Punjab!5e0!3m2!1sen!2sin!4v1575738867148!5m2!1sen!2sin"
                              width="100%"
                              height="150"
                              frameborder="0"
                              style="border: 0"
                              allowfullscreen=""
                            ></iframe>
                            <div class="card-body">
                              <h6 class="card-title">Envato HQ</h6>
                              <p class="card-text">121 King Street, Melbourne Victoria 3000 Australia</p>
                              <a href="#" class="text-link font-weight-bold">
                                <i class="feather-external-link"></i>
                                Get Directions
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="type" role="tabpanel" aria-labelledby="type-tab">
                    <div class="p-3 w-100">
                      <div class="row">
                        <div class="col-md-6">
                          <a href="profile.html">
                            <div class="border network-item rounded mb-3">
                              <div class="p-3 d-flex align-items-center network-item-header">
                                <div class="dropdown-list-image mr-3">
                                  <img class="rounded-circle" src="/img/p2.png" alt="" />
                                </div>
                                <div class="font-weight-bold">
                                  <h6 class="font-weight-bold text-dark mb-0">John Doe</h6>
                                  <div class="small text-black-50">Traveler</div>
                                </div>
                              </div>
                              <div class="d-flex align-items-center p-3 border-top border-bottom network-item-body">
                                <div class="overlap-rounded-circle">
                                  <img
                                    class="rounded-circle shadow-sm"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title=""
                                    src="/img/p6.png"
                                    alt=""
                                    data-original-title="Sophia Lee"
                                  />
                                  <img
                                    class="rounded-circle shadow-sm"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title=""
                                    src="/img/p7.png"
                                    alt=""
                                    data-original-title="John Doe"
                                  />
                                  <img
                                    class="rounded-circle shadow-sm"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title=""
                                    src="/img/p8.png"
                                    alt=""
                                    data-original-title="Julia Cox"
                                  />
                                  <img
                                    class="rounded-circle shadow-sm"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title=""
                                    src="/img/p9.png"
                                    alt=""
                                    data-original-title="Robert Cook"
                                  />
                                </div>
                                <span class="font-weight-bold small text-primary">4 mutual connections</span>
                              </div>
                              <div class="network-item-footer py-3 d-flex text-center">
                                <div class="col-6 pl-3 pr-1">
                                  <button type="button" class="btn btn-primary btn-sm btn-block">Connect</button>
                                </div>
                                <div class="col-6 pr-3 pl-1">
                                  <button type="button" class="btn btn-outline-primary btn-sm btn-block">
                                    <i class="feather-user-plus"></i>
                                    Follow
                                  </button>
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div class="col-md-6">
                          <a href="profile.html">
                            <div class="border network-item rounded mb-3">
                              <div class="p-3 d-flex align-items-center network-item-header">
                                <div class="dropdown-list-image mr-3">
                                  <img class="rounded-circle" src="/img/p3.png" alt="" />
                                </div>
                                <div class="font-weight-bold">
                                  <h6 class="font-weight-bold text-dark mb-0">Julia Cox</h6>
                                  <div class="small text-black-50">Art Designer</div>
                                </div>
                              </div>
                              <div class="d-flex align-items-center p-3 border-top border-bottom network-item-body">
                                <div class="overlap-rounded-circle">
                                  <img
                                    class="rounded-circle shadow-sm"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title=""
                                    src="/img/p10.png"
                                    alt=""
                                    data-original-title="Sophia Lee"
                                  />
                                  <img
                                    class="rounded-circle shadow-sm"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title=""
                                    src="/img/p11.png"
                                    alt=""
                                    data-original-title="John Doe"
                                  />
                                  <img
                                    class="rounded-circle shadow-sm"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title=""
                                    src="/img/p12.png"
                                    alt=""
                                    data-original-title="Julia Cox"
                                  />
                                  <img
                                    class="rounded-circle shadow-sm"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title=""
                                    src="/img/p13.png"
                                    alt=""
                                    data-original-title="Robert Cook"
                                  />
                                </div>
                                <span class="font-weight-bold small text-primary">4 mutual connections</span>
                              </div>
                              <div class="network-item-footer py-3 d-flex text-center">
                                <div class="col-6 pl-3 pr-1">
                                  <button type="button" class="btn btn-primary btn-sm btn-block">Connect</button>
                                </div>
                                <div class="col-6 pr-3 pl-1">
                                  <button type="button" class="btn btn-outline-primary btn-sm btn-block">
                                    <i class="feather-user-plus"></i>
                                    Follow
                                  </button>
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div class="col-md-6">
                          <a href="profile.html">
                            <div class="border network-item rounded mb-3">
                              <div class="p-3 d-flex align-items-center network-item-header">
                                <div class="dropdown-list-image mr-3">
                                  <img class="rounded-circle" src="/img/p4.png" alt="" />
                                </div>
                                <div class="font-weight-bold">
                                  <h6 class="font-weight-bold text-dark mb-0">Robert Cook</h6>
                                  <div class="small text-black-50">Graphic Designer</div>
                                </div>
                              </div>
                              <div class="d-flex align-items-center p-3 border-top border-bottom network-item-body">
                                <div class="overlap-rounded-circle">
                                  <img
                                    class="rounded-circle shadow-sm"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title=""
                                    src="/img/p1.png"
                                    alt=""
                                    data-original-title="Sophia Lee"
                                  />
                                  <img
                                    class="rounded-circle shadow-sm"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title=""
                                    src="/img/p3.png"
                                    alt=""
                                    data-original-title="Julia Cox"
                                  />
                                  <img
                                    class="rounded-circle shadow-sm"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title=""
                                    src="/img/p4.png"
                                    alt=""
                                    data-original-title="Robert Cook"
                                  />
                                </div>
                                <span class="font-weight-bold small text-primary">4 mutual connections</span>
                              </div>
                              <div class="network-item-footer py-3 d-flex text-center">
                                <div class="col-6 pl-3 pr-1">
                                  <button type="button" class="btn btn-primary btn-sm btn-block">Connect</button>
                                </div>
                                <div class="col-6 pr-3 pl-1">
                                  <button type="button" class="btn btn-outline-primary btn-sm btn-block">
                                    <i class="feather-user-plus"></i>
                                    Follow
                                  </button>
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div class="col-md-6">
                          <a href="profile.html">
                            <div class="border network-item rounded mb-3">
                              <div class="p-3 d-flex align-items-center network-item-header">
                                <div class="dropdown-list-image mr-3">
                                  <img class="rounded-circle" src="/img/p5.png" alt="" />
                                </div>
                                <div class="font-weight-bold">
                                  <h6 class="font-weight-bold text-dark mb-0">Stella Bergmann</h6>
                                  <div class="small text-black-50">Photography</div>
                                </div>
                              </div>
                              <div class="d-flex align-items-center p-3 border-top border-bottom network-item-body">
                                <div class="overlap-rounded-circle">
                                  <img
                                    class="rounded-circle shadow-sm"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title=""
                                    src="/img/p5.png"
                                    alt=""
                                    data-original-title="Sophia Lee"
                                  />
                                  <img
                                    class="rounded-circle shadow-sm"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title=""
                                    src="/img/p6.png"
                                    alt=""
                                    data-original-title="John Doe"
                                  />
                                  <img
                                    class="rounded-circle shadow-sm"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title=""
                                    src="/img/p7.png"
                                    alt=""
                                    data-original-title="Julia Cox"
                                  />
                                  <img
                                    class="rounded-circle shadow-sm"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title=""
                                    src="/img/p8.png"
                                    alt=""
                                    data-original-title="Robert Cook"
                                  />
                                </div>
                                <span class="font-weight-bold small text-primary">4 mutual connections</span>
                              </div>
                              <div class="network-item-footer py-3 d-flex text-center">
                                <div class="col-6 pl-3 pr-1">
                                  <button type="button" class="btn btn-primary btn-sm btn-block">Connect</button>
                                </div>
                                <div class="col-6 pr-3 pl-1">
                                  <button type="button" class="btn btn-outline-primary btn-sm btn-block">
                                    <i class="feather-user-plus"></i>
                                    Follow
                                  </button>
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div class="col-md-6">
                          <a href="profile.html">
                            <div class="border network-item rounded mb-3">
                              <div class="p-3 d-flex align-items-center network-item-header">
                                <div class="dropdown-list-image mr-3">
                                  <img class="rounded-circle" src="/img/p6.png" alt="" />
                                </div>
                                <div class="font-weight-bold">
                                  <h6 class="font-weight-bold text-dark mb-0">Dan Walker</h6>
                                  <div class="small text-black-50">UI/UX Designer</div>
                                </div>
                              </div>
                              <div class="d-flex align-items-center p-3 border-top border-bottom network-item-body">
                                <div class="overlap-rounded-circle">
                                  <img
                                    class="rounded-circle shadow-sm"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title=""
                                    src="/img/p9.png"
                                    alt=""
                                    data-original-title="Sophia Lee"
                                  />
                                  <img
                                    class="rounded-circle shadow-sm"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title=""
                                    src="/img/p13.png"
                                    alt=""
                                    data-original-title="Julia Cox"
                                  />
                                  <img
                                    class="rounded-circle shadow-sm"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title=""
                                    src="/img/p8.png"
                                    alt=""
                                    data-original-title="Robert Cook"
                                  />
                                </div>
                                <span class="font-weight-bold small text-primary">4 mutual connections</span>
                              </div>
                              <div class="network-item-footer py-3 d-flex text-center">
                                <div class="col-6 pl-3 pr-1">
                                  <button type="button" class="btn btn-primary btn-sm btn-block">Connect</button>
                                </div>
                                <div class="col-6 pr-3 pl-1">
                                  <button type="button" class="btn btn-outline-primary btn-sm btn-block">
                                    <i class="feather-user-plus"></i>
                                    Follow
                                  </button>
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div class="col-md-6">
                          <a href="profile.html">
                            <div class="border network-item rounded mb-3">
                              <div class="p-3 d-flex align-items-center network-item-header">
                                <div class="dropdown-list-image mr-3">
                                  <img class="rounded-circle" src="/img/p7.png" alt="" />
                                </div>
                                <div class="font-weight-bold">
                                  <h6 class="font-weight-bold text-dark mb-0">Julia Cox</h6>
                                  <div class="small text-black-50">Art Designer</div>
                                </div>
                              </div>
                              <div class="d-flex align-items-center p-3 border-top border-bottom network-item-body">
                                <div class="overlap-rounded-circle">
                                  <img
                                    class="rounded-circle shadow-sm"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title=""
                                    src="/img/p10.png"
                                    alt=""
                                    data-original-title="Sophia Lee"
                                  />
                                  <img
                                    class="rounded-circle shadow-sm"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title=""
                                    src="/img/p11.png"
                                    alt=""
                                    data-original-title="John Doe"
                                  />
                                  <img
                                    class="rounded-circle shadow-sm"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title=""
                                    src="/img/p12.png"
                                    alt=""
                                    data-original-title="Julia Cox"
                                  />
                                  <img
                                    class="rounded-circle shadow-sm"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title=""
                                    src="/img/p13.png"
                                    alt=""
                                    data-original-title="Robert Cook"
                                  />
                                </div>
                                <span class="font-weight-bold small text-primary">4 mutual connections</span>
                              </div>
                              <div class="network-item-footer py-3 d-flex text-center">
                                <div class="col-6 pl-3 pr-1">
                                  <button type="button" class="btn btn-primary btn-sm btn-block">Connect</button>
                                </div>
                                <div class="col-6 pr-3 pl-1">
                                  <button type="button" class="btn btn-outline-primary btn-sm btn-block">
                                    <i class="feather-user-plus"></i>
                                    Follow
                                  </button>
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div class="col-md-6">
                          <a href="profile.html">
                            <div class="border network-item rounded mb-3">
                              <div class="p-3 d-flex align-items-center network-item-header">
                                <div class="dropdown-list-image mr-3">
                                  <img class="rounded-circle" src="/img/p8.png" alt="" />
                                </div>
                                <div class="font-weight-bold">
                                  <h6 class="font-weight-bold text-dark mb-0">Robert Cook</h6>
                                  <div class="small text-black-50">Graphic Designer</div>
                                </div>
                              </div>
                              <div class="d-flex align-items-center p-3 border-top border-bottom network-item-body">
                                <div class="overlap-rounded-circle">
                                  <img
                                    class="rounded-circle shadow-sm"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title=""
                                    src="/img/p1.png"
                                    alt=""
                                    data-original-title="Sophia Lee"
                                  />
                                  <img
                                    class="rounded-circle shadow-sm"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title=""
                                    src="/img/p3.png"
                                    alt=""
                                    data-original-title="Julia Cox"
                                  />
                                  <img
                                    class="rounded-circle shadow-sm"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title=""
                                    src="/img/p4.png"
                                    alt=""
                                    data-original-title="Robert Cook"
                                  />
                                </div>
                                <span class="font-weight-bold small text-primary">4 mutual connections</span>
                              </div>
                              <div class="network-item-footer py-3 d-flex text-center">
                                <div class="col-6 pl-3 pr-1">
                                  <button type="button" class="btn btn-primary btn-sm btn-block">Connect</button>
                                </div>
                                <div class="col-6 pr-3 pl-1">
                                  <button type="button" class="btn btn-outline-primary btn-sm btn-block">
                                    <i class="feather-user-plus"></i>
                                    Follow
                                  </button>
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div class="col-md-6">
                          <a href="profile.html">
                            <div class="border network-item rounded mb-3">
                              <div class="p-3 d-flex align-items-center network-item-header">
                                <div class="dropdown-list-image mr-3">
                                  <img class="rounded-circle" src="/img/p9.png" alt="" />
                                </div>
                                <div class="font-weight-bold">
                                  <h6 class="font-weight-bold text-dark mb-0">Stella Bergmann</h6>
                                  <div class="small text-black-50">Photography</div>
                                </div>
                              </div>
                              <div class="d-flex align-items-center p-3 border-top border-bottom network-item-body">
                                <div class="overlap-rounded-circle">
                                  <img
                                    class="rounded-circle shadow-sm"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title=""
                                    src="/img/p5.png"
                                    alt=""
                                    data-original-title="Sophia Lee"
                                  />
                                  <img
                                    class="rounded-circle shadow-sm"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title=""
                                    src="/img/p6.png"
                                    alt=""
                                    data-original-title="John Doe"
                                  />
                                  <img
                                    class="rounded-circle shadow-sm"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title=""
                                    src="/img/p7.png"
                                    alt=""
                                    data-original-title="Julia Cox"
                                  />
                                  <img
                                    class="rounded-circle shadow-sm"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title=""
                                    src="/img/p8.png"
                                    alt=""
                                    data-original-title="Robert Cook"
                                  />
                                </div>
                                <span class="font-weight-bold small text-primary">4 mutual connections</span>
                              </div>
                              <div class="network-item-footer py-3 d-flex text-center">
                                <div class="col-6 pl-3 pr-1">
                                  <button type="button" class="btn btn-primary btn-sm btn-block">Connect</button>
                                </div>
                                <div class="col-6 pr-3 pl-1">
                                  <button type="button" class="btn btn-outline-primary btn-sm btn-block">
                                    <i class="feather-user-plus"></i>
                                    Follow
                                  </button>
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
            <aside class="col col-xl-3 order-xl-1 col-lg-6 order-lg-2 col-md-6 col-sm-6 col-12">
              <div class="box shadow-sm mb-3 rounded bg-white ads-box text-center overflow-hidden">
                <div class="box mb-3 shadow-sm border rounded bg-white profile-box text-center">
                  <div class="py-4 px-3 border-bottom">
                    <img src="/img/p13.png" class="img-fluid mt-2 rounded-circle" alt="Responsive image" />
                    <h5 class="font-weight-bold text-dark mb-1 mt-4">{{ team.name }}</h5>
                    <p class="mb-0 text-muted"></p>
                  </div>

                  <div class="overflow-hidden border-top">
                    <h6 class="font-weight-bold text-dark mb-1">{{ team.memberships.length }}</h6>
                    <p class="mb-0 text-black-50 small">members</p>
                  </div>
                </div>
              </div>

              <div class="shadow-sm rounded bg-white job-item-2 p-3 mb-3">
                <form>
                  <div class="form-group">
                    <label class="mb-1">Primary Role</label>
                    <div class="position-relative icon-form-control">
                      <i class="feather-award position-absolute"></i>
                      <input type="text" v-model="newMembership.primary_role" class="form-control" />
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="mb-1">Secondary Role</label>
                    <div class="position-relative icon-form-control">
                      <i class="feather-heart position-absolute"></i>
                      <input type="text" v-model="newMembership.secondary_role" class="form-control" />
                    </div>
                  </div>
                  <div class="custom-control custom-checkbox mb-3">
                    <input
                      type="checkbox"
                      v-model="newMembership.fill"
                      true-value="true"
                      false-value="false"
                      class="custom-control-input"
                      id="customCheck1"
                    />
                    <label class="custom-control-label" for="customCheck1">Willing to fill?</label>
                  </div>

                  <button
                    v-on:click="createMembership()"
                    class="btn btn-primary btn-block text-uppercase"
                    type="submit"
                  >
                    Join Our Team!
                  </button>
                </form>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </body>
    <!-- <h2>{{ team.name }}</h2>
    <h3>{{ team.about }}</h3>
    <h1>want to join?</h1>
    <div>
      Primary Role:
      <input type="text" v-model="newMembership.primary_role" />
      Secondary Role:
      <input type="text" v-model="newMembership.secondary_role" />
      Willing to fill?:
      <input type="checkbox" v-model="newMembership.fill" true-value="true" false-value="false" />
      <button v-on:click="createMembership()">Join Up</button>
    </div>

    <div v-for="membership in team.memberships" v-bind:key="membership">
      <h2>{{ membership.assigned_role }}:</h2>
      <h3>{{ membership.user.summoner_name }}</h3>
      <h3>Primary role: {{ membership.primary_role }}</h3>
      <h3>Secondary role: {{ membership.secondary_role }}</h3>
      <h3>Willing to fill: {{ membership.fill }}</h3>
      <div v-if="membership.user.rank_data.length > 0">
        <div v-for="rank in membership.user.rank_data" v-bind:key="rank.queueType">
          <div v-if="rank.queueType == 'RANKED_FLEX_SR'">
            <p>Ranked Flex</p>
          </div>
          <div v-if="rank.queueType == 'RANKED_SOLO_5x5'">
            <p>Solo/Duo</p>
          </div>
          <p>{{ rank.tier }}</p>
          <p>{{ rank.rank }}</p>
        </div>
      </div>
      <div v-else><p>Unranked</p></div>
      <router-link v-bind:to="`/users/${membership.user.id}`">View Profile</router-link>
      <div v-if="membership.user.id == $parent.getUserId()" v-bind:to="`/memberships/${membership.id}`">
        <button v-on:click="destroyMembership(membership)">Delete Role</button>
      </div>
    </div>
    <br />
    <br />
    <div v-if="team.user_id == $parent.getUserId()" v-bind:to="`/teams/${team.id}/edit`">
      <router-link :to="`/teams/${team.id}/edit`">Edit team info</router-link>
    </div>
    <br />
    <router-link to="/">back to Home</router-link> -->
  </div>
</template>
<!-- Bootstrap core JavaScript -->
<script src="vendor/jquery/jquery.min.js"></script>
<script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
<!-- slick Slider JS-->
<script type="text/javascript" src="vendor/slick/slick.min.js"></script>
<!-- Custom scripts for all pages-->
<script src="js/osahan.js"></script>
<script>
import axios from "axios";
export default {
  data: function () {
    return {
      team: {},
      newMembership: {},
      membership: {},
    };
  },
  created: function () {
    axios.get("/teams/" + this.$route.params.id).then((response) => {
      console.log("team show", response);
      this.team = response.data;
    });
  },
  methods: {
    createMembership: function () {
      var params = {
        team_id: this.$route.params.id,
        primary_role: this.newMembership.primary_role,
        secondary_role: this.newMembership.secondary_role,
        fill: this.newMembership.fill,
        assigned_role: this.newMembership.assigned_role,
      };
      axios.post("/memberships", params).then((response) => {
        console.log(response.data);
        this.team.memberships.push(response.data);
        this.newMembership = {};
      });
    },
    destroyMembership: function (membership) {
      axios.delete("/memberships/" + membership.id).then((response) => {
        console.log("memberships destroy", response);
        var index = this.team.memberships.indexOf(membership);
        this.team.memberships.splice(index, 1);
      });
    },
  },
};
</script>
