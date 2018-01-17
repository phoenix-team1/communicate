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
var ecpack = ecpack || {};

/**
 * @constructor
 */
ecpack.T_EC_GET_OFFLINE_CNT_RS = function() {
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
 * @returns {ecpack.T_EC_GET_OFFLINE_CNT_RS}
 */
ecpack.T_EC_GET_OFFLINE_CNT_RS.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {ecpack.T_EC_GET_OFFLINE_CNT_RS=} obj
 * @returns {ecpack.T_EC_GET_OFFLINE_CNT_RS}
 */
ecpack.T_EC_GET_OFFLINE_CNT_RS.getRootAsT_EC_GET_OFFLINE_CNT_RS = function(bb, obj) {
  return (obj || new ecpack.T_EC_GET_OFFLINE_CNT_RS).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {commonpack.S_RS_HEAD=} obj
 * @returns {commonpack.S_RS_HEAD}
 */
ecpack.T_EC_GET_OFFLINE_CNT_RS.prototype.sRsHead = function(obj) {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? (obj || new commonpack.S_RS_HEAD).__init(this.bb_pos + offset, this.bb) : null;
};

/**
 * @param {number} index
 * @param {ecpack.T_ECOFFLINECNT_INFO=} obj
 * @returns {ecpack.T_ECOFFLINECNT_INFO}
 */
ecpack.T_EC_GET_OFFLINE_CNT_RS.prototype.bidWithcntList = function(index, obj) {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? (obj || new ecpack.T_ECOFFLINECNT_INFO).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
};

/**
 * @returns {number}
 */
ecpack.T_EC_GET_OFFLINE_CNT_RS.prototype.bidWithcntListLength = function() {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @param {flatbuffers.Builder} builder
 */
ecpack.T_EC_GET_OFFLINE_CNT_RS.startT_EC_GET_OFFLINE_CNT_RS = function(builder) {
  builder.startObject(2);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} sRsHeadOffset
 */
ecpack.T_EC_GET_OFFLINE_CNT_RS.addSRsHead = function(builder, sRsHeadOffset) {
  builder.addFieldStruct(0, sRsHeadOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} bidWithcntListOffset
 */
ecpack.T_EC_GET_OFFLINE_CNT_RS.addBidWithcntList = function(builder, bidWithcntListOffset) {
  builder.addFieldOffset(1, bidWithcntListOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<flatbuffers.Offset>} data
 * @returns {flatbuffers.Offset}
 */
ecpack.T_EC_GET_OFFLINE_CNT_RS.createBidWithcntListVector = function(builder, data) {
  builder.startVector(4, data.length, 4);
  for (var i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]);
  }
  return builder.endVector();
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
ecpack.T_EC_GET_OFFLINE_CNT_RS.startBidWithcntListVector = function(builder, numElems) {
  builder.startVector(4, numElems, 4);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
ecpack.T_EC_GET_OFFLINE_CNT_RS.endT_EC_GET_OFFLINE_CNT_RS = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} offset
 */
ecpack.T_EC_GET_OFFLINE_CNT_RS.finishT_EC_GET_OFFLINE_CNT_RSBuffer = function(builder, offset) {
  builder.finish(offset);
};

// Exports for Node.js and RequireJS
this.commonpack = commonpack;
this.ecpack = ecpack;