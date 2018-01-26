// automatically generated by the FlatBuffers compiler, do not modify

/**
 * @const
 * @namespace
 */
var commonpack = commonpack || {};

/**
 * @const
 * @namespace
 */
var momentspack = momentspack || {};

/**
 * @constructor
 */
momentspack.T_MOMENTS_ARTICLE_ADD_RS = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {momentspack.T_MOMENTS_ARTICLE_ADD_RS}
 */
momentspack.T_MOMENTS_ARTICLE_ADD_RS.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {momentspack.T_MOMENTS_ARTICLE_ADD_RS=} obj
 * @returns {momentspack.T_MOMENTS_ARTICLE_ADD_RS}
 */
momentspack.T_MOMENTS_ARTICLE_ADD_RS.getRootAsT_MOMENTS_ARTICLE_ADD_RS = function(bb, obj) {
  return (obj || new momentspack.T_MOMENTS_ARTICLE_ADD_RS).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {commonpack.S_RS_HEAD=} obj
 * @returns {commonpack.S_RS_HEAD}
 */
momentspack.T_MOMENTS_ARTICLE_ADD_RS.prototype.sRsHead = function(obj) {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? (obj || new commonpack.S_RS_HEAD).__init(this.bb_pos + offset, this.bb) : null;
};

/**
 * @returns {flatbuffers.Long}
 */
momentspack.T_MOMENTS_ARTICLE_ADD_RS.prototype.peerUserId = function() {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? this.bb.readUint64(this.bb_pos + offset) : this.bb.createLong(0, 0);
};

/**
 * @returns {flatbuffers.Long}
 */
momentspack.T_MOMENTS_ARTICLE_ADD_RS.prototype.articleId = function() {
  var offset = this.bb.__offset(this.bb_pos, 8);
  return offset ? this.bb.readUint64(this.bb_pos + offset) : this.bb.createLong(0, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 */
momentspack.T_MOMENTS_ARTICLE_ADD_RS.startT_MOMENTS_ARTICLE_ADD_RS = function(builder) {
  builder.startObject(3);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} sRsHeadOffset
 */
momentspack.T_MOMENTS_ARTICLE_ADD_RS.addSRsHead = function(builder, sRsHeadOffset) {
  builder.addFieldStruct(0, sRsHeadOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Long} peerUserId
 */
momentspack.T_MOMENTS_ARTICLE_ADD_RS.addPeerUserId = function(builder, peerUserId) {
  builder.addFieldInt64(1, peerUserId, builder.createLong(0, 0));
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Long} articleId
 */
momentspack.T_MOMENTS_ARTICLE_ADD_RS.addArticleId = function(builder, articleId) {
  builder.addFieldInt64(2, articleId, builder.createLong(0, 0));
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
momentspack.T_MOMENTS_ARTICLE_ADD_RS.endT_MOMENTS_ARTICLE_ADD_RS = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} offset
 */
momentspack.T_MOMENTS_ARTICLE_ADD_RS.finishT_MOMENTS_ARTICLE_ADD_RSBuffer = function(builder, offset) {
  builder.finish(offset);
};

// Exports for Node.js and RequireJS
this.commonpack = commonpack;
this.momentspack = momentspack;
